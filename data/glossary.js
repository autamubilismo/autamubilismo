import { Book, Zap, Radio, CircleDot, Flag } from 'lucide-react';

export const GLOSSARY_SETS = [
  {
    id: 'general',
    title: "Dicionário Geral A-Z",
    description: "Termos essenciais para entender o que os narradores dizem.",
    color: "#D3968C",
    icon: Book,
    items: [
      { id: 'aero', term: "Aerodinâmica", definition: "Estudo do fluxo de ar e da interação entre o ar e o carro em movimento. Fundamental para desempenho e velocidade." },
      { id: 'apex', term: "Apex", definition: "O ponto médio ou mais fechado de uma curva. Acertar o apex correto é essencial para o tempo de volta mais rápido." },
      { id: 'aquaplaning', term: "Aquaplaning", definition: "Perda de tração quando os pneus deslizam sobre água acumulada na pista." },
      { id: 'blistering', term: "Blistering", definition: "Degradação do pneu causada por superaquecimento, fazendo a borracha se desprender em pedaços." },
      { id: 'brake-mig', term: "Brake Migration", definition: "Movimento da distribuição de frenagem para trás durante uma frenagem, compensando a redução de downforce." },
      { id: 'camber', term: "Camber", definition: "Ângulo de inclinação do pneu em relação ao eixo vertical. Afeta a área de contato do pneu com o asfalto." },
      { id: 'clean-air', term: "Clean Air (Ar Limpo)", definition: "Ar não perturbado à frente de um carro, proporcionando máxima eficiência aerodinâmica." },
      { id: 'dirty-air', term: "Dirty Air (Ar Sujo)", definition: "Ar turbulento deixado pelo carro à frente, dificultando ultrapassagens e reduzindo downforce." },
      { id: 'downforce', term: "Downforce", definition: "Força aerodinâmica que empurra o carro para baixo, aumentando aderência e velocidade nas curvas." },
      { id: 'drag', term: "Drag (Arrasto)", definition: "Resistência aerodinâmica que o carro enfrenta ao se mover pelo ar. Reduz velocidade máxima." },
      { id: 'graining', term: "Graining", definition: "Quando pequenos pedaços de borracha se desprendem da superfície do pneu, reduzindo aderência temporariamente." },
      { id: 'grand-chelem', term: "Grand Chelem", definition: "Feito raro: Pole position, vitória, volta mais rápida e liderar todas as voltas da corrida." },
      { id: 'grip', term: "Grip", definition: "Nível de aderência que o carro tem com o asfalto." },
      { id: 'halo', term: "Halo", definition: "Estrutura de proteção em titânio ao redor do cockpit, obrigatória desde 2018." },
      { id: 'lock-up', term: "Lock-up", definition: "Quando as rodas param de girar durante a frenagem, causando trava e ponto plano no pneu." },
      { id: 'marbles', term: "Marbles", definition: "Pedaços de borracha degradada que se acumulam fora da linha de corrida, reduzindo a aderência." },
      { id: 'oversteer', term: "Oversteer (Sair de Traseira)", definition: "Quando a traseira do carro perde aderência e tenta 'ultrapassar' a dianteira em curvas." },
      { id: 'parc-ferme', term: "Parc Fermé", definition: "Regra que proíbe as equipes de mexerem nos carros após a classificação." },
      { id: 'porpoising', term: "Porpoising", definition: "Efeito de quicamento vertical do carro causado por aerodinâmica (comum em 2022-2024)." },
      { id: 'slipstream', term: "Slipstream (Vácuo)", definition: "Efeito de sucção atrás de outro carro que reduz arrasto e aumenta velocidade." },
      { id: 'understeer', term: "Understeer (Sair de Frente)", definition: "Quando o carro não vira o suficiente apesar do comando do volante, tendendo a seguir reto." }
    ]
  },
  {
    id: 'tech-2026',
    title: "Nova Era 2026",
    description: "Tudo sobre o novo regulamento, X-Mode, Z-Mode e motores.",
    color: "#839958",
    icon: Zap,
    items: [
      { id: 'active-aero', term: "Aerodinâmica Ativa", definition: "Sistema que substitui o DRS. Os carros alternam entre X-Mode (reta) e Z-Mode (curva)." },
      { id: 'x-mode', term: "X-Mode (Reta)", definition: "Modo de baixo arrasto com asas abertas para velocidade máxima. O substituto do DRS." },
      { id: 'z-mode', term: "Z-Mode (Curva)", definition: "Modo de alta downforce com asas fechadas para 'grudar' no chão nas curvas." },
      { id: 'override', term: "MGU-K Override", definition: "Novo sistema de ultrapassagem. Boost de 350kW (elétrico) quando se está a 1s do rival." },
      { id: 'ice-2026', term: "Motor 2026 (ICE)", definition: "V6 1.6L Turbo. Mais fraco que o anterior (540bhp), mas compensado pela parte elétrica." },
      { id: 'mguk-2026', term: "MGU-K 2026", definition: "A parte elétrica triplicou de força! Agora gera 470bhp (quase metade da potência total)." },
      { id: 'sustentavel', term: "Combustível Sustentável", definition: "100% obrigatório a partir de 2026, sem origem fóssil." },
      { id: 'dimensoes', term: "Carros Menores", definition: "Em 2026, os carros são 20cm mais curtos e 10cm mais estreitos que seus antecessores." },
      { id: 'livery', term: "Regra de Pintura", definition: "Acabou o carro todo preto! Mínimo de 55% do carro deve ter tinta/adesivo, escondendo o carbono." }
    ]
  },
  {
    id: 'radio',
    title: "Rádio & Box",
    description: "Entenda o que o engenheiro fala no ouvido do piloto.",
    color: "#00CED1",
    icon: Radio,
    items: [
      { id: 'box-box', term: "Box, Box!", definition: "Ordem para entrar nos boxes IMEDIATAMENTE naquela volta." },
      { id: 'lift-coast', term: "Lift and Coast", definition: "Tirar o pé do acelerador antes de frear. Serve para economizar combustível ou bateria." },
      { id: 'push', term: "Push!", definition: "Acelere ao máximo! Dê tudo o que o carro tem agora." },
      { id: 'undercut', term: "Undercut", definition: "Parar ANTES do rival para pegar pneus novos e ganhar a posição quando ele parar." },
      { id: 'overcut', term: "Overcut", definition: "Ficar na pista MAIS tempo que o rival, tentando ganhar a posição no ritmo." },
      { id: 'double-stack', term: "Double Stack", definition: "Quando a equipe para os dois carros um seguido do outro na mesma volta." },
      { id: 'check', term: "We are checking", definition: "A frase clássica (especialmente da Ferrari) quando o engenheiro ainda está analisando os dados." },
      { id: 'blue-flag-radio', term: "Blue Flags", definition: "Aviso de que um carro mais rápido vem atrás e o piloto deve deixar passar." },
      { id: 'strat', term: "Strat [Número]", definition: "Comando para mudar o mapa do motor para uma estratégia específica." }
    ]
  },
  {
    id: 'tyres',
    title: "Pneus & Estratégia",
    description: "Compostos C1 a C5, chuva e janelas de temperatura.",
    color: "#FF7F50",
    icon: CircleDot,
    items: [
      { id: 'c1', term: "C1 (Duro)", definition: "O pneu mais duro de todos (Faixa Branca). Dura muito, mas é lento e difícil de aquecer." },
      { id: 'c3', term: "C3 (Médio)", definition: "O pneu 'faz tudo' (Faixa Amarela). Equilíbrio perfeito entre velocidade e durabilidade." },
      { id: 'c5', term: "C5 (Macio)", definition: "O mais rápido de todos (Faixa Vermelha). Gruda muito, mas acaba em poucas voltas. Rei de Mônaco." },
      { id: 'inter', term: "Intermediário (Verde)", definition: "Para pista úmida. O pneu mais versátil para condições mistas." },
      { id: 'wet', term: "Full Wet (Azul)", definition: "Para dilúvio. Escoa 85 litros de água por segundo a 300km/h." },
      { id: 'blankets', term: "Tyre Blankets", definition: "Cobertores elétricos que aquecem os pneus antes de serem colocados no carro." },
      { id: 'window', term: "Janela de Operação", definition: "A temperatura ideal do pneu. Se estiver frio, escorrega. Se passar, derrete." }
    ]
  },
  {
    id: 'rules',
    title: "Regras & Bandeiras",
    description: "Penalidades, pontuação e o significado das bandeiras.",
    color: "#FFD700",
    icon: Flag,
    items: [
      { id: 'flag-yellow', term: "Bandeira Amarela", definition: "Perigo! Reduza a velocidade e proibido ultrapassar." },
      { id: 'flag-red', term: "Bandeira Vermelha", definition: "Corrida paralisada. Todos voltam para o box. Acontece em acidentes graves." },
      { id: 'flag-blue', term: "Bandeira Azul", definition: "Você é retardatário. Deixe o líder passar ou levará punição." },
      { id: 'sc', term: "Safety Car (SC)", definition: "Carro de segurança. Entra na pista para agrupar o pelotão em ritmo lento." },
      { id: 'vsc', term: "Virtual Safety Car (VSC)", definition: "Não há carro na pista, mas todos devem manter uma velocidade reduzida controlada." },
      { id: 'cap', term: "Cost Cap (Teto de Gastos)", definition: "Limite de US$ 215 milhões (em 2026) que as equipes podem gastar por ano." },
      { id: 'sprint', term: "Sprint Race", definition: "Corrida curta de 100km aos sábados. Vale 8 pontos para o vencedor." },
      { id: 'points', term: "Pontuação GP", definition: "1º (25pts), 2º (18), 3º (15), 4º (12), 5º (10), 6º (8), 7º (6), 8º (4), 9º (2), 10º (1)." }
    ]
  }
];

export const GLOSSARY_DATA = GLOSSARY_SETS[0].items;
