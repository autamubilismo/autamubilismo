"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Check,
  X,
  Trash2,
  Filter,
  RefreshCw,
  Clock,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  Loader2,
  Lock,
  Mail,
  LogOut,
} from "lucide-react";
import { useTheme } from "@/components/layout/ThemeContext";

const AdminComments = () => {
  const { theme } = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [actionLoading, setActionLoading] = useState(null);

  const isLight = theme === "light";

  // Estilos
  const pageBgStyle = isLight
    ? {
        backgroundColor: "#FFF0F5",
        backgroundImage: `radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(216, 196, 240, 0.4) 0px, transparent 50%)`,
      }
    : {
        backgroundColor: "#050510",
        backgroundImage: `linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px), radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)`,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
      };

  const cardBg = isLight
    ? "bg-white/70 backdrop-blur-xl border border-pink-100"
    : "bg-[#121217]/80 backdrop-blur-xl border border-white/10";

  const inputStyles = isLight
    ? "bg-white/80 border-pink-200 text-gray-900 placeholder-gray-400 focus:border-pink-400 focus:ring-pink-400/20"
    : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20";

  const textPrimary = isLight ? "text-gray-900" : "text-white";
  const textSecondary = isLight ? "text-gray-600" : "text-gray-400";
  const accentColor = isLight ? "text-pink-500" : "text-cyan-400";

  // Verificar autenticação ao carregar
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      verifyToken(token);
    } else {
      setAuthLoading(false);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const res = await fetch("/api/admin/auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("admin_token");
      }
    } catch {
      localStorage.removeItem("admin_token");
    } finally {
      setAuthLoading(false);
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setAuthError(data.error || "Senha incorreta");
      }
    } catch {
      setAuthError("Erro ao fazer login");
    } finally {
      setLoginLoading(false);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setComments([]);
  };

  // Buscar comentários
  const fetchComments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/comments?filter=${filter}`);
      const data = await res.json();
      if (data.comments) {
        setComments(data.comments);
      }
    } catch (err) {
      console.error("Erro ao carregar comentários:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchComments();
    }
  }, [filter, isAuthenticated]);

  // Aprovar/Reprovar
  const handleApprove = async (id, approved) => {
    setActionLoading(id);
    try {
      const res = await fetch("/api/admin/comments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, approved }),
      });

      if (res.ok) {
        setComments((prev) =>
          prev.map((c) => (c._id === id ? { ...c, approved } : c))
        );
      }
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      setActionLoading(null);
    }
  };

  // Excluir
  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja excluir este comentário?")) return;

    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/comments?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setComments((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      setActionLoading(null);
    }
  };

  // Formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const pendingCount = comments.filter((c) => !c.approved).length;
  const approvedCount = comments.filter((c) => c.approved).length;

  // Tela de loading inicial
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={pageBgStyle}>
        <Loader2 size={40} className={`animate-spin ${accentColor}`} />
      </div>
    );
  }

  // Tela de login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={pageBgStyle}>
        <div className={`${cardBg} p-8 md:p-12 rounded-3xl w-full max-w-md`}>
          <div className="text-center mb-8">
            <div
              className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                isLight ? "bg-pink-100 text-pink-600" : "bg-cyan-500/10 text-cyan-400"
              }`}
            >
              <Lock size={40} />
            </div>
            <h1 className={`text-2xl font-bold ${textPrimary}`}>
              Área Restrita
            </h1>
            <p className={`text-sm mt-2 ${textSecondary}`}>
              Digite a senha para acessar o painel de administração
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textSecondary}`}>
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAuthError("");
                }}
                placeholder="Digite a senha"
                required
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${inputStyles}`}
              />
            </div>

            {authError && (
              <div
                className={`p-3 rounded-xl mb-4 text-sm font-medium ${
                  isLight
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 ${
                isLight
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white"
              }`}
            >
              {loginLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Lock size={18} />
              )}
              {loginLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className={`text-sm font-medium ${accentColor} hover:underline`}
            >
              Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Painel de admin (autenticado)
  return (
    <div className="min-h-screen pb-20" style={pageBgStyle}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full transition-all ${
                isLight
                  ? "text-pink-500 hover:bg-pink-50 bg-white/60 border border-pink-100"
                  : "text-cyan-400 hover:bg-cyan-900/20 bg-black/40 border border-cyan-500/30"
              }`}
            >
              <ChevronLeft size={16} />
              Voltar ao site
            </Link>

            <button
              onClick={handleLogout}
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full transition-all ${
                isLight
                  ? "text-gray-500 hover:bg-gray-100 bg-white/60 border border-gray-200"
                  : "text-gray-400 hover:bg-white/10 bg-black/40 border border-white/10"
              }`}
            >
              <LogOut size={16} />
              Sair
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`p-4 rounded-2xl ${
                  isLight ? "bg-pink-100 text-pink-600" : "bg-cyan-500/10 text-cyan-400"
                }`}
              >
                <MessageCircle size={32} />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textPrimary}`}>
                  Gerenciar Comentários
                </h1>
                <p className={textSecondary}>
                  {pendingCount} pendente{pendingCount !== 1 ? "s" : ""} •{" "}
                  {approvedCount} aprovado{approvedCount !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <button
              onClick={fetchComments}
              disabled={loading}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                isLight
                  ? "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
              Atualizar
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div className={`${cardBg} p-4 rounded-2xl mb-6`}>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={18} className={textSecondary} />
            <span className={`text-sm font-medium ${textSecondary}`}>Filtrar:</span>
            {[
              { value: "all", label: "Todos", count: comments.length },
              { value: "pending", label: "Pendentes", count: pendingCount },
              { value: "approved", label: "Aprovados", count: approvedCount },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === f.value
                    ? isLight
                      ? "bg-pink-500 text-white"
                      : "bg-cyan-500 text-black"
                    : isLight
                    ? "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Comentários */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={40} className={`animate-spin ${accentColor}`} />
          </div>
        ) : comments.length === 0 ? (
          <div className={`${cardBg} p-12 rounded-2xl text-center`}>
            <MessageCircle size={48} className={`mx-auto mb-4 ${textSecondary} opacity-30`} />
            <p className={`text-lg font-medium ${textSecondary}`}>
              Nenhum comentário encontrado
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment._id}
                className={`${cardBg} p-6 rounded-2xl transition-all ${
                  !comment.approved
                    ? isLight
                      ? "border-l-4 border-l-yellow-400"
                      : "border-l-4 border-l-yellow-500"
                    : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Avatar e Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        comment.approved
                          ? isLight
                            ? "bg-green-100 text-green-600"
                            : "bg-green-500/20 text-green-400"
                          : isLight
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {comment.approved ? (
                        <CheckCircle size={24} />
                      ) : (
                        <Clock size={24} />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`font-bold ${textPrimary}`}>
                          {comment.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            comment.approved
                              ? isLight
                                ? "bg-green-100 text-green-700"
                                : "bg-green-500/20 text-green-400"
                              : isLight
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {comment.approved ? "Aprovado" : "Pendente"}
                        </span>
                      </div>

                      <div className={`flex flex-wrap items-center gap-3 text-xs ${textSecondary} mb-3`}>
                        <span className="flex items-center gap-1">
                          <Mail size={12} />
                          {comment.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>

                      <p className={`${textPrimary} mb-3`}>{comment.comment}</p>

                      {comment.postTitle && (
                        <Link
                          href={`/${comment.postType}/${comment.postSlug}`}
                          target="_blank"
                          className={`inline-flex items-center gap-1 text-xs font-medium ${accentColor} hover:underline`}
                        >
                          <ExternalLink size={12} />
                          {comment.postTitle}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex items-center gap-2 lg:flex-col">
                    {!comment.approved && (
                      <button
                        onClick={() => handleApprove(comment._id, true)}
                        disabled={actionLoading === comment._id}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                          isLight
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-green-500 text-black hover:bg-green-400"
                        } disabled:opacity-50`}
                      >
                        {actionLoading === comment._id ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Check size={16} />
                        )}
                        Aprovar
                      </button>
                    )}

                    {comment.approved && (
                      <button
                        onClick={() => handleApprove(comment._id, false)}
                        disabled={actionLoading === comment._id}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                          isLight
                            ? "bg-yellow-500 text-white hover:bg-yellow-600"
                            : "bg-yellow-500 text-black hover:bg-yellow-400"
                        } disabled:opacity-50`}
                      >
                        {actionLoading === comment._id ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <X size={16} />
                        )}
                        Reprovar
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(comment._id)}
                      disabled={actionLoading === comment._id}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        isLight
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                      } disabled:opacity-50`}
                    >
                      {actionLoading === comment._id ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Trash2 size={16} />
                      )}
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminComments;
