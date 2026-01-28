'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/layout/ThemeContext';

const BackButton = ({ to = '/', theme }) => {
  const isLight = theme === 'light';
  return (
    <Link
      href={to}
      className={`group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:-translate-x-1 px-5 py-2.5 rounded-full ${
        isLight
          ? 'text-gray-500 hover:text-cottage-rosy bg-white/50 border border-white hover:border-cottage-rosy shadow-sm'
          : 'text-cyan-400/80 hover:text-cyan-300 bg-black/20 border border-cyan-500/20 hover:border-cyan-500/60 shadow-[0_0_10px_rgba(0,255,242,0.1)] hover:shadow-[0_0_20px_rgba(0,255,242,0.3)]'
      }`}
    >
      <ChevronLeft size={14} />
      Voltar
    </Link>
  );
};

const CreditsPage = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';
  const isLight = resolvedTheme === 'light';

  const lightPattern = {
    backgroundColor: '#F7F4D5',
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(211, 150, 140, 0.35) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(211, 150, 140, 0.25) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
    `,
  };

  const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px),
      radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)
    `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%',
  };

  const cardClass = isLight
    ? 'bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-12px_rgba(255,192,203,0.4)]'
    : 'bg-[#121217]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 shadow-[0_0_40px_rgba(0,0,0,0.5)]';

  const stats = [
    { value: '2026', label: 'Temporada de Estreia' },
    { value: '100%', label: 'Fontes Confiáveis' },
    { value: '24', label: 'GPs para Cobrir' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Credibilidade',
      text: 'Todas as informações são verificadas e creditadas. Trabalhamos com fontes oficiais e respeitadas no mundo do automobilismo.',
    },
    {
      icon: '🔍',
      title: 'Transparência',
      text: 'Diferenciamos claramente notícia de opinião. Você sempre sabe quando é fato e quando é análise pessoal.',
    },
    {
      icon: '💬',
      title: 'Comunidade',
      text: 'Este espaço é para todos os fãs de F1. Debates respeitosos, opiniões diversas e paixão compartilhada pelo esporte.',
    },
    {
      icon: '📚',
      title: 'Educação',
      text: 'Da terminologia técnica aos circuitos históricos, tornamos o complexo mundo da F1 compreensível para todos.',
    },
  ];

  const journey = [
    {
      title: 'Janeiro 2026',
      text: 'Lançamento oficial do blog antes do início da temporada. Conteúdo completo sobre todas as equipes e pilotos.',
    },
    {
      title: 'Temporada 2026',
      text: 'Cobertura completa dos 24 GPs com análises pré e pós-corrida, notícias atualizadas e conteúdo educativo contínuo.',
    },
    {
      title: 'Futuro',
      text: 'Credenciamento de imprensa, cobertura presencial do paddock e parcerias estratégicas no mundo do automobilismo.',
    },
  ];

  const features = [
    '📰 Notícias: Atualizações verificadas de fontes confiáveis como F1.com, FIA, Autosport e The Race.',
    '✍️ Artigos: Análises aprofundadas, opiniões fundamentadas e discussões sobre os temas mais relevantes da temporada.',
    '🏎️ Informações Completas: Perfis de pilotos e equipes, guia de circuitos, calendário detalhado, classificação atualizada e muito mais.',
    '📖 Glossário F1: Toda a terminologia do esporte explicada de forma clara — de DRS a undercut.',
    '💬 Fanzone: Espaço para a comunidade votar, participar e interagir. Sua voz importa aqui.',
    '🎬 Multimídia: Galeria de fotos, vídeos e conteúdo visual para complementar as análises.',
  ];

  return (
    <div
      className="min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans flex flex-col"
      style={isLight ? lightPattern : darkPattern}
    >
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
        <div
          className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${
            isLight ? 'bg-cottage-rosy' : 'bg-[#bd00ff]/30 animate-pulse'
          }`}
        />
        <div
          className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${
            isLight ? 'bg-cottage-rosy' : 'bg-[#00fff2]/20 animate-pulse'
          }`}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <BackButton to="/" theme={resolvedTheme} />

        <div className="flex-1 flex items-center justify-center">
          <div className={`max-w-4xl w-full p-10 md:p-16 rounded-[3rem] relative overflow-hidden group ${cardClass}`}>
            <div
              className={`absolute top-0 left-0 w-full h-1.5 ${
                isLight
                  ? 'bg-gradient-to-r from-cottage-rosy via-cottage-rosy to-cottage-rosy'
                  : 'bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500'
              }`}
            />

            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                    isLight ? 'bg-cottage-rosy text-cottage-beige' : 'bg-white/10 text-cyan-200'
                  }`}
                >
                  ⚡
                </div>
                <div>
                  <p className={`text-xs font-black uppercase tracking-[0.3em] ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                    Sobre o Projeto
                  </p>
                  <h1 className={`text-3xl md:text-5xl font-black leading-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Fórmula 1 com um novo olhar
                  </h1>
                </div>
              </div>

              <p className={`text-base md:text-lg leading-relaxed max-w-3xl ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>
                Um espaço onde jornalismo sério encontra paixão autêntica. Porque o automobilismo merece ser contado por todas as vozes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl p-5 text-center ${
                      isLight ? 'bg-white/70 border border-cottage-rosy' : 'bg-black/30 border border-white/10'
                    }`}
                  >
                    <div className={`text-2xl font-black ${isLight ? 'text-gray-900' : 'text-white'}`}>{item.value}</div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                  <h2 className={`text-xl font-black mb-3 ${isLight ? 'text-gray-900' : 'text-white'}`}>A Missão</h2>
                  <p className={`text-sm md:text-base leading-relaxed ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>
                    Este projeto nasceu da vontade de criar um espaço onde o jornalismo esportivo de qualidade se encontra com uma perspectiva fresca e autêntica. Não é sobre simplificar a F1 — é sobre torná-la acessível sem perder a profundidade.
                  </p>
                  <p className={`text-sm md:text-base leading-relaxed mt-4 ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>
                    Aqui você encontra análises técnicas, notícias verificadas e opiniões fundamentadas, sempre respeitando a inteligência do leitor. Seja você um fã de longa data ou alguém descobrindo o esporte agora, este é seu lugar na F1.
                  </p>
                  <p className={`text-sm md:text-base leading-relaxed mt-4 ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>
                    A Fórmula 1 é sobre velocidade, estratégia e paixão. Este blog é sobre contar essas histórias com a seriedade que elas merecem.
                  </p>
                </div>
                <div className={`rounded-3xl p-5 ${isLight ? 'bg-cottage-beige/70 border border-cottage-rosy' : 'bg-white/5 border border-white/10'}`}>
                  <h3 className={`text-sm font-black uppercase tracking-wider mb-4 ${isLight ? 'text-cottage-rosy' : 'text-cyan-200'}`}>
                    A Jornada
                  </h3>
                  <div className="space-y-4">
                    {journey.map((item) => (
                      <div key={item.title}>
                        <div className={`text-xs font-black uppercase tracking-wider ${isLight ? 'text-gray-700' : 'text-white'}`}>
                          {item.title}
                        </div>
                        <p className={`text-xs leading-relaxed mt-1 ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className={`text-xl font-black mb-5 ${isLight ? 'text-gray-900' : 'text-white'}`}>Nossos Valores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {values.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-2xl p-5 ${
                        isLight ? 'bg-white/70 border border-cottage-rosy' : 'bg-black/30 border border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${isLight ? 'bg-cottage-rosy' : 'bg-white/10'}`}>
                          {item.icon}
                        </div>
                        <h3 className={`text-sm font-black ${isLight ? 'text-gray-900' : 'text-white'}`}>{item.title}</h3>
                      </div>
                      <p className={`text-xs leading-relaxed ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className={`text-xl font-black mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>O Que Você Encontra Aqui</h2>
                <div className={`rounded-3xl p-5 ${isLight ? 'bg-cottage-beige/70 border border-cottage-rosy' : 'bg-white/5 border border-white/10'}`}>
                  <ul className={`space-y-3 text-sm ${isLight ? 'text-gray-700' : 'text-cyan-100/80'}`}>
                    {features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`rounded-3xl p-6 text-center ${isLight ? 'bg-white/80 border border-cottage-rosy' : 'bg-black/30 border border-white/10'}`}>
                <p className={`text-lg md:text-xl font-black ${isLight ? 'text-gray-900' : 'text-white'}`}>
                  Vamos Juntos Nessa Jornada? 🏁
                </p>
                <p className={`text-sm mt-2 ${isLight ? 'text-gray-600' : 'text-cyan-100/80'}`}>
                  Acompanhe a temporada 2026 com conteúdo de qualidade, análises profundas e uma comunidade apaixonada por Fórmula 1.
                </p>
              </div>
            </div>

            <div className={`border-t pt-8 mt-10 flex flex-col md:flex-row items-center justify-center gap-4 ${isLight ? 'border-cottage-rosy' : 'border-white/5'}`}>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] opacity-50 ${isLight ? 'text-gray-400' : 'text-cyan-100'}`}>
                © 2025 Autamubilismo
              </p>
              <span className={`hidden md:block w-1 h-1 rounded-full ${isLight ? 'bg-gray-300' : 'bg-white/20'}`} />
              <p className={`text-xs font-bold uppercase tracking-[0.2em] opacity-50 ${isLight ? 'text-gray-400' : 'text-cyan-100'}`}>
                v1.0.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
