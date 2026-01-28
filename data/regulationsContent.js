// ============================================
// REGULAMENTO F1 2026 — CONTEÚDO DO HOTSITE
// Fonte: 5 Documentos Técnicos Oficiais
// ============================================

// ============================================
// PÁGINA PRINCIPAL: /regulations
// ============================================
export const REGULATIONS_INDEX = {
  hero: {
    tag: "Regulamento Técnico 2026",
    title: "A Nova Era da Fórmula 1: Guia Completo do Regulamento 2026",
    description: "Paridade 50/50, combustível 100% sustentável, aerodinâmica ativa e o conceito Nimble Car. Explore cada pilar da maior revolução técnica da era híbrida."
  },
  summary: {
    show: true,
    title: "Os 3 Pilares de 2026",
    pillars: [
      { icon: "Zap", label: "Eletrificação", value: "50/50", desc: "Paridade inédita entre motor e elétrico" },
      { icon: "Leaf", label: "Sustentabilidade", value: "Net Zero", desc: "Combustível 100% não-fóssil" },
      { icon: "Gauge", label: "Competitividade", value: "Nimble Car", desc: "Carros menores, corridas melhores" }
    ]
  },
  navigationCards: [
    {
      slug: "unidade-de-potencia",
      icon: "BatteryCharging",
      title: "Unidade de Potência",
      description: "V6 1.6L com paridade 50/50 entre ICE e ERS. Fim do MGU-H, turbo isolado a 150.000 rpm.",
      tag: "50/50",
      color: "cyan"
    },
    {
      slug: "sistema-ers",
      icon: "Zap",
      title: "Sistema ERS",
      description: "MGU-K de 350kW (470cv), recuperação de 9 MJ/volta e janela de bateria limitada a 4 MJ.",
      tag: "350kW",
      color: "fuchsia"
    },
    {
      slug: "combustivel-sustentavel",
      icon: "Leaf",
      title: "Combustível Sustentável",
      description: "Advanced Sustainable de origem não fóssil. RON 95–102, emissões líquidas zero.",
      tag: "NET ZERO",
      color: "green"
    },
    {
      slug: "aerodinamica-ativa",
      icon: "Wind",
      title: "Aerodinâmica Ativa",
      description: "Modos X (Low Drag) e Z (High Downforce) integrados à gestão de bateria e ERS.",
      tag: "X/Z MODE",
      color: "blue"
    },
    {
      slug: "gestao-de-energia",
      icon: "Gauge",
      title: "Gestão de Energia",
      description: "Manual Override, Efeito Monza, lift & coast e a estratégia que define corridas.",
      tag: "OVERRIDE",
      color: "red"
    },
    {
      slug: "conformidade-tecnica",
      icon: "ShieldCheck",
      title: "Conformidade Técnica",
      description: "Dimensões, tolerâncias, materiais proibidos e classificação de componentes pela FIA.",
      tag: "FIA",
      color: "orange"
    }
  ]
};

// ============================================
// SUBPÁGINA 1: UNIDADE DE POTÊNCIA
// ============================================
export const SUBPAGE_UNIDADE_POTENCIA = {
  slug: "unidade-de-potencia",
  hero: {
    tag: "Arquitetura da PU",
    title: "Unidade de Potência 2026: A Paridade 50/50",
    description: "O V6 1.6L permanece, mas a dinâmica muda: metade da potência vem da combustão, metade do MGU-K a 350kW. Sem MGU-H."
  },
  summary: {
    show: true,
    title: "A Nova Arquitetura de Potência",
    text: "A Unidade de Potência (PU) de 2026 mantém o motor V6 de 1,6 litro a 90° como fundação térmica, mas redefine o equilíbrio de forças. A mudança mais impactante é a extinção do MGU-H — o gerador térmico acoplado ao turbo que, desde 2014, permitia recuperação de energia contínua nas retas. Sem ele, o turbocompressor torna-se um componente puramente mecânico, limitado a 150.000 rpm com wastegate obrigatória. Em compensação, o MGU-K salta de 120kW para 350kW (aproximadamente 470cv), estabelecendo uma paridade de 50/50 entre combustão e eletricidade. O fluxo de energia do combustível é limitado a 3000 MJ/h, e abaixo de 10.500 rpm segue a fórmula EF(MJ/h)=0,27×N(rpm)+165. A taxa de compressão máxima é 16,0 e a pressão de admissão limitada a 4,8 barA. Cada componente tem peso mínimo: ICE (130kg), turbo (12kg), MGU-K (16kg), Energy Store (35kg). A proibição de Magnésio, Berílio acima de 0,25% e cerâmicas garante controle de custos."
  },
  metaphor: {
    show: true,
    title: "O Motor e o Exoesqueleto",
    text: "Pense na PU de 2026 como um corredor equipado com um exoesqueleto robótico. O motor V6 é o corpo do atleta — poderoso mas limitado a ~400kW. O MGU-K é o exoesqueleto — capaz de adicionar 350kW instantaneamente. Até 2025, o exoesqueleto era fraco (120kW) e tinha um carregador embutido (MGU-H) que reabastecia a bateria continuamente. Em 2026, o exoesqueleto é três vezes mais potente, mas perdeu o carregador automático. Toda a energia precisa vir das frenagens. É como ter um traje de Iron Man com bateria limitada: você precisa escolher quando usar o boost e quando economizar."
  },
  cards: {
    engine: {
      title: "Motor ICE V6 1.6L",
      desc: "4 tempos, 1600cc, V6 a 90°. Bore 80mm (±0,1mm). Taxa de compressão máx. 16,0. Fluxo limitado a 3000 MJ/h.",
      stats: [
        { label: "ICE (Combustão)", value: "~400kW (Fluxo 3000MJ/h)", percent: 50 },
        { label: "MGU-K (Elétrico)", value: "350kW (470cv) | 500Nm", percent: 50 }
      ],
      extra: "Fórmula de fluxo: EF(MJ/h) = 0,27 × N(rpm) + 165 (abaixo de 10.500 rpm)"
    },
    fuel: {
      title: "Turbocompressor",
      desc: "Estágio único, isolado do ERS (sem MGU-H). Exducer: 100–110mm. Inducer: 90–100mm. Máx. 2 wastegates. VGT/VNT proibidos.",
      tag: "150K",
      subtag: "RPM Máximo | Pop-off 4.8 barA"
    },
    chassis: {
      title: "Pesos Mínimos",
      specs: [
        { label: "ICE Completo", val: "130 kg", diff: "(mín.)" },
        { label: "Turbocompressor", val: "12 kg", diff: "(mín.)" },
        { label: "MGU-K", val: "16 kg", diff: "(mín.)" }
      ]
    },
    safety: {
      title: "Fim do MGU-H",
      desc: "A extinção do MGU-H elimina a recuperação térmica contínua e o controle eletrônico do turbo-lag. Toda recuperação depende agora do MGU-K via frenagem."
    },
    overtake: {
      tag: "Paridade 50/50",
      title: "O Novo Equilíbrio",
      desc: "Pela primeira vez, a potência elétrica (350kW) rivaliza com a térmica (~400kW). A PU deixa de ser motor com assistência elétrica para se tornar sistema dual."
    },
    manufacturers: {
      title: "Materiais Permitidos",
      list: ["Ligas de Ferro (AMS 6487)", "Titânio (Ti64)", "Ligas de Alumínio", "Tungstênio", "Pistão mín. 350g", "Biela mín. 320g"]
    }
  }
};

// ============================================
// SUBPÁGINA 2: SISTEMA ERS
// ============================================
export const SUBPAGE_SISTEMA_ERS = {
  slug: "sistema-ers",
  hero: {
    tag: "Núcleo Elétrico",
    title: "Sistema ERS: O Motor do Desempenho em 2026",
    description: "De sistema auxiliar a protagonista: 350kW de potência, 9 MJ de recuperação por volta e janela de bateria de apenas 4 MJ."
  },
  summary: {
    show: true,
    title: "O ERS Como Centro Gravitacional",
    text: "O Energy Recovery System (ERS) de 2026 abandona seu papel de coadjuvante para se tornar o núcleo da performance. O MGU-K triplica sua potência para 350kW (470cv), com torque máximo de 500Nm referenciado ao virabrequim (fator de correção de 0,97) e rotação máxima de 60.000 rpm. O Energy Store (ES) — a bateria — opera sob a 'Janela de 4 MJ': a FIA permite oscilação de apenas 4 MJ entre carga máxima e mínima durante a volta. O limite de energia colhida é de 9 MJ, mas em classificação pode ser reduzido para 5 MJ em circuitos com pouca frenagem. O CU-K é o conversor DC-AC bidirecional entre bateria e motor. O ESME funciona como célula de sobrevivência para alta voltagem, que opera até 1000V. O BMS monitora voltagem e equilíbrio das células, prevenindo falhas catastróficas."
  },
  metaphor: {
    show: true,
    title: "O Orçamento Energético",
    text: "Imagine que cada volta é um dia de trabalho com orçamento fixo de energia. Você recebe 4 MJ para gastar (a janela do ES) e pode recuperar até 9 MJ freando. Mas a conta nunca pode variar mais de 4 MJ. O MGU-K é seu funcionário mais produtivo — entrega 350kW instantaneamente. Mas acima de 340 km/h, ele é dispensado progressivamente (fórmula P=1850−5×V), até parar a 345 km/h. A única forma de mantê-lo é ativar o 'Manual Override', estendendo seu turno até 355 km/h. Gerir esse orçamento é a diferença entre vencer e perder."
  },
  cards: {
    engine: {
      title: "MGU-K: O Protagonista",
      desc: "Potência DC máx. 350kW (470cv). Torque 500Nm (ref. virabrequim, η=0,97). Rotação máx. 60.000 rpm. Massa mín. 16kg.",
      stats: [
        { label: "Captação (Harvesting)", value: "Máx. 9 MJ/volta", percent: 69 },
        { label: "Janela SoC", value: "Delta Máx. 4 MJ", percent: 31 }
      ],
      extra: "Entrega: 350kW DC | Rotação: 60.000 rpm | Torque: 500Nm"
    },
    aero: {
      title: "Componentes do ERS",
      zMode: { title: "CU-K (Control Unit)", desc: "Conversor DC-AC bidirecional. Interface entre bateria (ES) e MGU-K." },
      xMode: { title: "ESME (Enclosure)", desc: "Célula de sobrevivência para HV. Protege ES e CU-K em impactos." },
      stats: "BMS monitora voltagem e equilíbrio | IMD com shutdown automático"
    },
    chassis: {
      title: "Limites de Energia",
      specs: [
        { label: "Harvesting (MGU-K → ES)", val: "9 MJ", diff: "(máx.)" },
        { label: "Janela SoC (Delta)", val: "4 MJ", diff: "(máx.)" },
        { label: "Cap Quali (selecionados)", val: "5 MJ", diff: "(FIA)" }
      ]
    },
    overtake: {
      tag: "Curva de Potência",
      title: "De-Rating Elétrico",
      desc: "Acima de 340km/h, potência cai para 150kW (P=1850−5×V). A 345km/h, cancelamento total — elevado para 355km/h apenas no Overtake Mode."
    },
    safety: {
      title: "Segurança HV",
      desc: "Sistema opera até 1000V. Cabos HV laranja obrigatórios (Art. 5.23.2). IMD com shutdown automático. Luzes de status ERS e buzzer de alerta."
    },
    fuel: {
      title: "Quali: 8,5 → 5 MJ",
      desc: "Limite padrão no quali é 8,5–9 MJ/volta. Em circuitos com pouca frenagem, FIA reduz para 5 MJ evitando manobras artificiais.",
      tag: "QUALI",
      subtag: "Limite dinâmico FIA"
    }
  }
};

// ============================================
// SUBPÁGINA 3: COMBUSTÍVEL SUSTENTÁVEL
// ============================================
export const SUBPAGE_COMBUSTIVEL_SUSTENTAVEL = {
  slug: "combustivel-sustentavel",
  hero: {
    tag: "Sustentabilidade",
    title: "Combustível 100% Sustentável: Net Zero na Pista",
    description: "Advanced Sustainable fuel de origem não fóssil. Captura de carbono, biomassa e RFNBO substituem derivados de petróleo."
  },
  summary: {
    show: true,
    title: "O Imperativo da Sustentabilidade",
    text: "A partir de 2026, a F1 utilizará exclusivamente combustíveis 'Advanced Sustainable' (AS), eliminando dependência de fontes fósseis. O combustível deve ser derivado de: captura direta de carbono do ar, resíduos municipais, biomassa não alimentar ou combustíveis renováveis de origem não biológica (RFNBO). A redução de emissões de GEE deve conformar com a Diretiva de Energias Renováveis da UE. Propriedades físico-químicas são controladas: RON entre 95,0 e 102,0, densidade entre 720 e 785 kg/m³, teor de oxigênio entre 6,7% e 7,1% em peso. Consumo de óleo limitado a 0,30 L/100 km. Paralelamente, o regulamento proíbe materiais exóticos na PU — Magnésio para uso geral, Berílio acima de 0,25%, cerâmicas e compósitos de matriz cerâmica, e revestimentos acima de 0,8mm."
  },
  metaphor: {
    show: true,
    title: "A Receita Molecular",
    text: "Pense no combustível de 2026 como receita gourmet com restrições rígidas. O chef não pode usar ingrediente convencional (fóssil). Deve criar tudo a partir de CO₂ capturado do ar, restos de cozinha (resíduos municipais) ou plantas que ninguém come (biomassa). O prato final precisa ter o mesmo desempenho do tradicional — 95 a 102 de octanagem — mas com emissões líquidas zero. É como fazer bolo idêntico ao original usando apenas ingredientes reciclados, garantindo que o sabor (performance) seja indistinguível."
  },
  cards: {
    engine: {
      title: "Fontes de Combustível AS",
      desc: "4 fontes permitidas: captura de CO₂, resíduos municipais, biomassa não alimentar e RFNBO. Todas não fósseis, emissões líquidas zero.",
      stats: [
        { label: "Redução de GEE", value: "Conforme Diretiva EU", percent: 100 },
        { label: "Origem Fóssil", value: "0% (Banida)", percent: 0 }
      ],
      extra: "Conformidade com a Diretiva de Energias Renováveis da União Europeia"
    },
    chassis: {
      title: "Especificações Físico-Químicas",
      specs: [
        { label: "RON (Octanagem)", val: "95,0–102,0", diff: "" },
        { label: "Densidade", val: "720–785 kg/m³", diff: "" },
        { label: "Consumo de Óleo", val: "0,30 L/100km", diff: "(máx.)" }
      ]
    },
    fuel: {
      title: "Teor de Oxigênio",
      desc: "O combustível deve ter entre 6,7% e 7,1% de oxigênio em peso. Janela estreita garante combustão otimizada com fluxo de 3000 MJ/h.",
      tag: "O₂",
      subtag: "6,7% – 7,1% em peso"
    },
    safety: {
      title: "Fluxo de Energia",
      desc: "Fluxo máx. 3000 MJ/h. Abaixo de 10.500 rpm: EF(MJ/h) = 0,27 × N(rpm) + 165. SECU calcula em tempo real via LHV do combustível."
    },
    manufacturers: {
      title: "Materiais Proibidos na PU",
      list: ["Ligas de Magnésio", "Berílio > 0,25%", "Cerâmicas / MMCs", "Revestimentos > 0,8mm", "Ouro/Platina > 0,035mm"]
    },
    overtake: {
      tag: "Net Zero",
      title: "Emissões Líquidas Zero",
      desc: "Todo carbono emitido foi previamente capturado da atmosfera ou resíduos. Ciclo de vida neutro em CO₂, transformando pista em laboratório de descarbonização."
    }
  }
};

// ============================================
// SUBPÁGINA 4: AERODINÂMICA ATIVA
// ============================================
export const SUBPAGE_AERODINAMICA_ATIVA = {
  slug: "aerodinamica-ativa",
  hero: {
    tag: "Aero Ativa",
    title: "Aerodinâmica Ativa: X-Mode e Z-Mode",
    description: "Mais que auxílio de ultrapassagem — a aerodinâmica ativa de 2026 é ferramenta de gestão de bateria integrada ao ERS."
  },
  summary: {
    show: true,
    title: "O Segundo Sistema de Recuperação",
    text: "Em 2026, a aerodinâmica ativa deixa de ser apenas auxílio de ultrapassagem (como o DRS) para se tornar ferramenta integral de gestão de bateria. O sistema opera em dois modos: Z-Mode (alta pressão aerodinâmica para curvas, maximizando aderência e frenagens intensas para regeneração) e X-Mode (baixo arrasto para retas, compensando queda de potência elétrica em altas velocidades). A transição entre modos é automática em zonas designadas pela FIA, sendo desativada durante frenagem. O Z-Mode maximiza regeneração nas curvas (contribuindo para 9 MJ de harvesting), enquanto X-Mode preserva energia nas retas ao reduzir arrasto. O sucesso em 2026 será definido pela interdependência sistêmica — uma falha na lógica da asa ativa é, tecnicamente, uma falha de entrega de potência."
  },
  metaphor: {
    show: true,
    title: "A Asa Inteligente",
    text: "Imagine as asas do carro como penas de uma ave de rapina. Ao mergulhar para caçar (retas), a ave recolhe as penas para minimizar resistência — é o X-Mode, reduzindo arrasto para compensar queda de potência acima de 340 km/h. Ao planar em círculos (curvas), ela abre as asas ao máximo para gerar sustentação — é o Z-Mode, maximizando aderência e energia recuperada nas frenagens. Em 2026, as penas se movem automaticamente conforme a zona da pista, e cada ajuste impacta quanto 'combustível elétrico' estará disponível nos metros seguintes."
  },
  cards: {
    aero: {
      title: "Modos Aerodinâmicos",
      zMode: { title: "Z-Mode (High Downforce)", desc: "Asas fechadas para máxima aderência. Otimiza frenagens para harvesting." },
      xMode: { title: "X-Mode (Low Drag)", desc: "Asas abertas para mínimo arrasto. Compensa queda elétrica acima de 340 km/h." },
      stats: "Desativação automática na frenagem | Zonas designadas pela FIA"
    },
    engine: {
      title: "Integração Aero + ERS",
      desc: "A aero ativa é extensão da gestão de bateria. Z-Mode maximiza harvesting (9 MJ), X-Mode preserva energia nas retas.",
      stats: [
        { label: "Z-Mode → Harvesting", value: "Até 9 MJ/volta", percent: 69 },
        { label: "X-Mode → Preservação", value: "Redução de arrasto", percent: 31 }
      ],
      extra: "Interdependência: falha aero = falha de entrega de potência"
    },
    overtake: {
      tag: "Interdependência",
      title: "Fim dos Silos",
      desc: "Sucesso em 2026 exige harmonia total entre motor e aerodinâmica. Falha na lógica da asa ativa é, tecnicamente, falha na entrega de potência do ERS."
    },
    safety: {
      title: "Protocolos de Segurança",
      desc: "Cabos HV laranja obrigatórios (Art. 5.23.2). Luzes de status ERS visíveis. Buzzer de alerta para falhas de isolamento. ESME blindada."
    },
    fuel: {
      title: "Identidade Visual",
      desc: "Mínimo de 55% da superfície coberta por pintura ou adesivos, combatendo tendência de fibra de carbono exposta para redução de peso.",
      tag: "55%",
      subtag: "Cobertura mínima obrigatória"
    },
    chassis: {
      title: "Conceito Nimble Car",
      specs: [
        { label: "Peso Mínimo", val: "768kg", diff: "(-30kg)" },
        { label: "Largura Total", val: "1900mm", diff: "(-100mm)" },
        { label: "Entre-eixos", val: "3400mm", diff: "(-200mm)" }
      ]
    }
  }
};

// ============================================
// SUBPÁGINA 5: GESTÃO DE ENERGIA
// ============================================
export const SUBPAGE_GESTAO_ENERGIA = {
  slug: "gestao-de-energia",
  hero: {
    tag: "Estratégia",
    title: "Gestão de Energia: A Nova Arma Tática",
    description: "Manual Override, Efeito Monza e lift & coast. A pilotagem em 2026 é coreografia entre o V6 e o sistema elétrico."
  },
  summary: {
    show: true,
    title: "A Coreografia da Energia",
    text: "A propulsão em 2026 é uma dança entre V6 e sistema elétrico, governada por limites de velocidade e orçamento energético. Cada volta tem fases: na frenagem, MGU-K atua como gerador (até 9 MJ). Na saída de curva, despeja 350kW instantaneamente. Em alta velocidade, potência é reduzida pela fórmula P(kW)=1850−5×V(kph) — a 340 km/h restam 150kW, a 345 km/h assistência é cancelada. O 'Manual Override' eleva esse teto para 355 km/h, dando ao perseguidor vantagem decisiva. Simulações indicam que em Monza a bateria pode se esgotar antes do fim das retas — o 'derating'. Antonelli: 'Significa não acelerar a fundo imediatamente para economizar energia'. Classificação tem limites próprios: 8,5 MJ gerais, reduzidos para 5 MJ em circuitos com pouca frenagem."
  },
  metaphor: {
    show: true,
    title: "O Maratonista Tático",
    text: "Pense no piloto de 2026 como maratonista com mochila de energia limitada. Ele pode correr em sprint (350kW) mas cada sprint gasta bateria. Nas descidas (frenagens), recarrega — até 9 MJ. Porém, a mochila só comporta 4 MJ de variação. Em retas longas (Monza), sprint acaba antes do fim do trecho, e ele continua só com as pernas (ICE). O 'Manual Override' é energy drink de emergência — disponível só para quem está atrás, dando boost até 355 km/h. O líder começa a desacelerar eletricamente a partir de 290 km/h."
  },
  cards: {
    engine: {
      title: "Fases da Volta",
      desc: "Frenagem → MGU-K gera energia. Saída de curva → 350kW. Alta velocidade → de-rating progressivo. Override → boost até 355km/h.",
      stats: [
        { label: "Potência Máxima (Saída Curva)", value: "350kW (470cv)", percent: 100 },
        { label: "Potência a 340km/h", value: "150kW fixos", percent: 43 }
      ],
      extra: "Cancelamento: 345 km/h (padrão) | 355 km/h (Override)"
    },
    overtake: {
      tag: "Manual Override",
      title: "Vantagem do Perseguidor",
      desc: "Líder perde potência a partir de 290km/h (P=1850−5×V), zerando a 355km/h. Perseguidor ativa Override e mantém 350kW até 337km/h — vantagem decisiva."
    },
    aero: {
      title: "Efeito Monza vs. Padrão",
      zMode: { title: "Circuito Padrão", desc: "Muitas frenagens = boa regeneração. Bateria se mantém na janela de 4 MJ." },
      xMode: { title: "Efeito Monza", desc: "Retas longas esgotam bateria. Piloto precisa de lift & coast para preservar energia." },
      stats: "Lift & coast: não por combustível, mas para maximizar 9 MJ de harvesting"
    },
    chassis: {
      title: "Limites de Classificação",
      specs: [
        { label: "Recuperação Padrão", val: "8,5–9 MJ", diff: "(volta)" },
        { label: "Recuperação Restrita", val: "5 MJ", diff: "(FIA)" },
        { label: "Delta SoC Máximo", val: "4 MJ", diff: "(pista)" }
      ]
    },
    safety: {
      title: "Brake-by-Wire (BBW)",
      desc: "500 Nm de torque regenerativo (Art. 5.4.10) no eixo traseiro. Transição entre freio friccional e MGU-K será o maior desafio técnico de 2026."
    },
    fuel: {
      title: "Antonelli sobre 2026",
      desc: "'Em certas retas ou curvas, não acelerar a fundo imediatamente para economizar energia.' A pilotagem muda radicalmente.",
      tag: "PILOTAGEM",
      subtag: "Gestão > Velocidade"
    }
  }
};

// ============================================
// SUBPÁGINA 6: CONFORMIDADE TÉCNICA
// ============================================
export const SUBPAGE_CONFORMIDADE_TECNICA = {
  slug: "conformidade-tecnica",
  hero: {
    tag: "Auditoria FIA",
    title: "Conformidade Técnica: Tolerâncias e Governança",
    description: "Dimensões submilimétricas, materiais homologados, classificação de componentes e fiscalização rigorosa da FIA."
  },
  summary: {
    show: true,
    title: "Conformidade Como Estado Contínuo",
    text: "A PU 2026 exige conformidade total 'em todos os momentos' (Art. 1.5). Auditoria não é verificação pontual — é estado contínuo de legalidade documental, energética e dimensional. ICE opera sob tolerâncias submilimétricas: diâmetro do cilindro 80mm (±0,1mm), espaçamento entre cilindros 101mm (±2mm), comprimento da biela 119,5–120,5mm. Turbo tem geometria restrita: exducer 100–110mm, inducer 90–100mm, distância axial máx. 175mm. Materiais controlados pelo Art. 15.7: Magnésio proibido, Berílio limitado a 0,25%, cerâmicas só para isolamento, revestimentos até 0,8mm. Classificação LPUC/SSPUC/OSPUC/DSPUC governa propriedade intelectual — Art. 18.2 proíbe compartilhamento de instalações. FIA monitora via 2 medidores de fluxo, sensores no plenum, sensores DC entre ES e CU-K, e escaneamento CAD."
  },
  metaphor: {
    show: true,
    title: "O Exame de DNA do Carro",
    text: "Imagine que cada carro de F1 em 2026 passa por exame de DNA antes de cada corrida. Cada 'gene' (componente) tem dimensões exatas que não podem variar nem um décimo de milímetro. Os 'cromossomos' são classificados: LPUC (genes proprietários), SSPUC (padronizados por laboratório único), OSPUC (código aberto), DSPUC (especificações FIA). A 'família' inclui Ferro, Titânio e Alumínio — Magnésio e Berílio são mutações proibidas. Dois 'exames de sangue' (medidores de fluxo) monitoram combustível em tempo real, e scanners CAD comparam carro físico com genoma digital."
  },
  cards: {
    chassis: {
      title: "Tolerâncias do ICE (Art. 5.6)",
      specs: [
        { label: "Diâmetro do Cilindro", val: "80mm", diff: "(±0,1mm)" },
        { label: "Cilindrada", val: "1600cc", diff: "(+0/-10cc)" },
        { label: "Taxa de Compressão", val: "16,0", diff: "(máx.)" }
      ]
    },
    engine: {
      title: "Geometria do Turbo",
      desc: "Estágio único. Exducer: 100–110mm. Inducer: 90–100mm. Distância axial máx. 175mm. Massa mín. 12kg. VGT/VNT proibidos.",
      stats: [
        { label: "Compressor (Exducer)", value: "100–110mm", percent: 55 },
        { label: "Turbina (Inducer)", value: "90–100mm", percent: 45 }
      ],
      extra: "Eixo paralelo a Y=0 | Inboard de Y=25 | Máx. 150.000 rpm"
    },
    aero: {
      title: "Classificação de Componentes",
      zMode: { title: "LPUC (Listed)", desc: "IP exclusiva: ICE, Turbo, MGU-K, ESME, CU-K. Proibido compartilhar." },
      xMode: { title: "SSPUC / OSPUC", desc: "Fornecedor único (SSPUC): medidores, sensores. Aberto (OSPUC): custos reduzidos." },
      stats: "DSPUC: Especificações FIA | Art. 18.2: Proibido compartilhar instalações"
    },
    fuel: {
      title: "Massas e CG",
      desc: "ICE: mín. 130kg. Virabrequim: mín. 5800g. Pistão: mín. 350g. Biela: mín. 320g. CG (Z) acima de Z=200.",
      tag: "130kg",
      subtag: "ICE Mínimo | CG > Z=200"
    },
    manufacturers: {
      title: "Materiais: Permitidos vs. Proibidos",
      list: ["✓ Ferro (AMS 6487)", "✓ Titânio (Ti64)", "✓ Alumínio", "✓ Tungstênio", "✗ Magnésio", "✗ Berílio >0,25%", "✗ Cerâmicas", "✗ MMCs"]
    },
    safety: {
      title: "Monitoramento FIA",
      desc: "2 medidores de fluxo no tanque, sensores P/T no plenum, sensores DC entre ES e CU-K, escaneamento CAD para validar geometria física vs. modelo digital."
    },
    overtake: {
      tag: "Art. 1.5",
      title: "Conformidade Contínua",
      desc: "Exigência de legalidade contínua — documental, energética e dimensional. Tecnologias não cobertas permitidas só até fim do campeonato, sujeitas a revisão."
    }
  }
};

// ============================================
// MAPEAMENTO E HELPERS
// ============================================
export const REGULATIONS_SUBPAGES = {
  'unidade-de-potencia': SUBPAGE_UNIDADE_POTENCIA,
  'sistema-ers': SUBPAGE_SISTEMA_ERS,
  'combustivel-sustentavel': SUBPAGE_COMBUSTIVEL_SUSTENTAVEL,
  'aerodinamica-ativa': SUBPAGE_AERODINAMICA_ATIVA,
  'gestao-de-energia': SUBPAGE_GESTAO_ENERGIA,
  'conformidade-tecnica': SUBPAGE_CONFORMIDADE_TECNICA
};

export const REGULATION_NAV_ORDER = [
  'unidade-de-potencia',
  'sistema-ers',
  'combustivel-sustentavel',
  'aerodinamica-ativa',
  'gestao-de-energia',
  'conformidade-tecnica'
];

export const getAllRegulationSlugs = () => REGULATION_NAV_ORDER;

export const getRegulationBySlug = (slug) => REGULATIONS_SUBPAGES[slug] || null;

export const getAdjacentPages = (slug) => {
  const idx = REGULATION_NAV_ORDER.indexOf(slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? REGULATIONS_SUBPAGES[REGULATION_NAV_ORDER[idx - 1]] : null,
    next: idx < REGULATION_NAV_ORDER.length - 1 ? REGULATIONS_SUBPAGES[REGULATION_NAV_ORDER[idx + 1]] : null
  };
};
