"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Send, User, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const Comments = ({ postId, postType = "news", theme = "dark" }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const isLight = theme === "light";

  // Buscar comentários
  useEffect(() => {
    if (!postId) return;

    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?postId=${postId}&postType=${postType}`);
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

    fetchComments();
  }, [postId, postType]);

  // Enviar comentário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          postId,
          postType,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao enviar comentário");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", comment: "" });

      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  // Estilos baseados no tema - Cottagecore
  const cardBg = isLight
    ? "bg-white/70 backdrop-blur-xl border border-[#D3968C]/20"
    : "bg-[#121217]/80 backdrop-blur-xl border border-white/10";

  const inputStyles = isLight
    ? "bg-white/80 border-[#D3968C]/30 text-[#0A3323] placeholder-[#105666]/50 focus:border-[#D3968C] focus:ring-[#D3968C]/20"
    : "bg-black/40 border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20";

  const buttonStyles = isLight
    ? "bg-gradient-to-r from-[#D3968C] to-[#0A3323] hover:from-[#c5857b] hover:to-[#0A3323] text-white shadow-lg shadow-[#D3968C]/25"
    : "bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/25";

  const accentColor = isLight ? "text-[#D3968C]" : "text-cyan-400";
  const textPrimary = isLight ? "text-[#0A3323]" : "text-white";
  const textSecondary = isLight ? "text-[#105666]/70" : "text-gray-400";

  // Formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <div className={`mt-16 ${cardBg} p-8 md:p-10 rounded-[2rem]`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`p-3 rounded-2xl ${isLight ? "bg-[#D3968C]/15 text-[#0A3323]" : "bg-cyan-500/10 text-cyan-400"}`}>
          <MessageCircle size={24} />
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${textPrimary}`}>Comentários</h3>
          <p className={`text-sm ${textSecondary}`}>
            {comments.length > 0
              ? `${comments.length} comentário${comments.length > 1 ? "s" : ""}`
              : "Seja o primeiro a comentar!"}
          </p>
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textSecondary}`}>
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              minLength={2}
              maxLength={50}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${inputStyles}`}
            />
          </div>
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textSecondary}`}>
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${inputStyles}`}
            />
            <p className={`text-[10px] mt-1 ${textSecondary} opacity-70`}>
              Seu e-mail não será publicado
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textSecondary}`}>
            Comentário
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Escreva seu comentário..."
            required
            minLength={5}
            maxLength={1000}
            rows={4}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 resize-none ${inputStyles}`}
          />
          <p className={`text-[10px] mt-1 ${textSecondary} opacity-70`}>
            {formData.comment.length}/1000 caracteres
          </p>
        </div>

        {/* Mensagens de status */}
        {error && (
          <div className={`flex items-center gap-2 p-4 rounded-xl mb-4 ${
            isLight ? "bg-red-50 text-red-600 border border-red-200" : "bg-red-500/10 text-red-400 border border-red-500/20"
          }`}>
            <AlertCircle size={18} />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        {success && (
          <div className={`flex items-center gap-2 p-4 rounded-xl mb-4 ${
            isLight ? "bg-[#D3968C]/10 text-[#0A3323] border border-[#D3968C]/30" : "bg-green-500/10 text-green-400 border border-green-500/20"
          }`}>
            <CheckCircle size={18} />
            <span className="text-sm font-medium">
              Comentário enviado! Será publicado após aprovação.
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${buttonStyles}`}
        >
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar Comentário
            </>
          )}
        </button>
      </form>

      {/* Divisor */}
      <div className={`border-t ${isLight ? "border-[#D3968C]/20" : "border-white/10"} mb-8`} />

      {/* Lista de Comentários */}
      {loading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 size={32} className={`animate-spin ${accentColor}`} />
        </div>
      ) : comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className={`p-6 rounded-2xl transition-all ${
                isLight
                  ? "bg-gradient-to-br from-[#D3968C]/10 to-[#D3968C]/10 border border-[#D3968C]/20"
                  : "bg-white/5 border border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  isLight
                    ? "bg-gradient-to-br from-[#D3968C] to-[#0A3323] text-white"
                    : "bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white"
                }`}>
                  <span className="text-lg font-bold uppercase">
                    {comment.name.charAt(0)}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`font-bold ${textPrimary}`}>
                      {comment.name}
                    </span>
                    <span className={`flex items-center gap-1 text-xs ${textSecondary}`}>
                      <Clock size={12} />
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isLight ? "text-[#105666]/80" : "text-gray-300"}`}>
                    {comment.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`text-center py-10 ${textSecondary}`}>
          <MessageCircle size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Nenhum comentário ainda</p>
          <p className="text-sm opacity-70">Seja o primeiro a compartilhar sua opinião!</p>
        </div>
      )}
    </div>
  );
};

export default Comments;
