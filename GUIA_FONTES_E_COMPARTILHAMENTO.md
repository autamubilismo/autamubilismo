# Guia: Fontes e Compartilhamento Personalizado

## ✅ Sistema Implementado

Seu site já possui **tudo configurado** para creditar fontes e compartilhar notícias/artigos com meta tags personalizadas!

---

## 📝 Como Adicionar Fontes no Sanity

### 1. Acesse o Sanity Studio
- Abra o Sanity Studio (normalmente em `http://localhost:3333` ou sua URL do Sanity)

### 2. Edite uma Notícia ou Artigo
Ao criar/editar uma notícia ou artigo, você verá esses campos:

#### **Nome da fonte** (`sourceLabel`)
- Campo de texto simples
- **Exemplo:** "Portal da Fórmula 1", "Motorsport.com", "The Race"
- Este é o nome que aparecerá como crédito

#### **Link da fonte** (`sourceUrl`)
- Campo de URL
- **Exemplo:** "https://www.formula1.com/en/latest/article..."
- Link para a matéria original

### 3. Como Aparece no Site

Quando você preenche esses campos, aparece um card estilizado no final do artigo/notícia:

```
┌─────────────────────────────────────────┐
│  🔗  FONTE ORIGINAL                     │
│                                         │
│  Portal da Fórmula 1 →                 │
│  (link clicável)                        │
└─────────────────────────────────────────┘
```

**Exemplos de uso:**

✅ **Notícia traduzida/adaptada:** Preencha os dois campos
- `sourceLabel`: "Motorsport.com"
- `sourceUrl`: "https://motorsport.com/f1/news/..."

✅ **Artigo original seu:** Deixe os campos vazios
- Os campos não aparecem se estiverem vazios

✅ **Só mencionar fonte (sem link):** Preencha só o `sourceLabel`
- `sourceLabel`: "Entrevista exclusiva"
- `sourceUrl`: (vazio)

---

## 🔗 Compartilhamento Personalizado

### Meta Tags Configuradas

Cada notícia/artigo tem **3 níveis de personalização**:

#### **1. Campo SEO no Sanity** (Prioridade Máxima)
Ao editar no Sanity, procure o campo **"SEO"** que contém:

- **Título SEO** (`metaTitle`)
  - Título otimizado para compartilhamento
  - **Exemplo:** "Norris vence em Singapura e esquenta o campeonato | Autamubilismo"

- **Descrição SEO** (`metaDescription`)
  - Resumo curto (até 160 caracteres)
  - **Exemplo:** "Lando Norris dominou do início ao fim em Marina Bay e reduziu a diferença para Verstappen."

- **Imagem OG** (`ogImage`)
  - Imagem específica para compartilhamento (ideal: 1200x630px)
  - Se não preencher, usa a imagem de capa do post

#### **2. Fallback Automático**
Se você **não preencher** o campo SEO:
- Usa o **título** da notícia/artigo
- Usa o **resumo** (excerpt)
- Usa a **imagem de capa**

#### **3. Fallback Final**
Se nada estiver preenchido:
- Título: "Autamubilismo"
- Descrição: "As últimas notícias de automobilismo"
- Imagem: `/og-default.png`

### Como Fica no Compartilhamento

Quando alguém compartilha seu link no **WhatsApp, Twitter, Facebook, LinkedIn**:

```
┌────────────────────────────────────────┐
│  [IMAGEM DE CAPA]                      │
├────────────────────────────────────────┤
│  Norris vence em Singapura e esquenta │
│  o campeonato | Autamubilismo          │
│                                        │
│  Lando Norris dominou do início ao... │
│                                        │
│  autamubilismo.com                     │
└────────────────────────────────────────┘
```

---

## 🎨 Personalização Avançada

### URLs Específicas por Tipo

- **Notícias:** `https://autamubilismo.com/news/[slug]`
- **Artigos:** `https://autamubilismo.com/article/[slug]`

As meta tags incluem automaticamente:
- `og:type`: "article"
- `og:locale`: "pt_BR"
- `og:site_name`: "Autamubilismo"
- `article:published_time`: Data de publicação
- `article:author`: Nome do autor
- `article:section`: Categoria

### Twitter Card

Configurado como `summary_large_image` para mostrar imagem grande.

---

## 🧪 Como Testar

### 1. Teste Local
Depois de publicar no Sanity:
1. Acesse a URL da notícia/artigo
2. Veja o código fonte (Ctrl+U)
3. Procure por `<meta property="og:` para ver as tags

### 2. Validadores Online

**Facebook/Open Graph:**
- https://developers.facebook.com/tools/debug/
- Cole a URL da sua notícia
- Clique em "Scrape Again" se já existir

**Twitter:**
- https://cards-dev.twitter.com/validator
- Cole a URL da sua notícia
- Veja a preview do card

**LinkedIn:**
- https://www.linkedin.com/post-inspector/
- Cole a URL e valide

### 3. Forçar Atualização do Cache

Se mudou as imagens/textos mas o compartilhamento ainda mostra antigo:

1. **Facebook:** Use o debugger acima e clique em "Scrape Again"
2. **Twitter:** Aguarde ~1 hora ou use o validator
3. **LinkedIn:** Use o post inspector

---

## 📋 Checklist para Cada Post

Ao criar uma notícia/artigo no Sanity:

- [ ] **Título**: Claro e direto
- [ ] **Slug**: Gerado automaticamente do título
- [ ] **Resumo (excerpt)**: 1-2 frases sobre o conteúdo
- [ ] **Imagem de Capa**: Upload da imagem principal (mínimo 1200x630px)
- [ ] **Categoria**: Selecionar categoria adequada
- [ ] **Autor**: Seu nome ou "Redação"
- [ ] **Data de Publicação**: Definir data/hora

### Se traduzir/adaptar de outra fonte:
- [ ] **Nome da fonte**: Nome do site original
- [ ] **Link da fonte**: URL completa da matéria

### Para otimizar compartilhamento (opcional):
- [ ] **SEO → Título SEO**: Título otimizado
- [ ] **SEO → Descrição SEO**: Resumo curto e atrativo
- [ ] **SEO → Imagem OG**: Imagem específica (se diferente da capa)

---

## 🚀 Dicas de Otimização

### Títulos para Compartilhamento
❌ "Grande GP!"
✅ "Verstappen domina GP da Holanda e amplia liderança no campeonato"

### Descrições
❌ "Veja o que aconteceu na corrida"
✅ "Max Verstappen venceu em Zandvoort pela 3ª vez seguida, com Red Bull mantendo domínio total."

### Imagens
- **Tamanho ideal:** 1200x630px (16:9)
- **Formato:** JPG ou PNG
- **Qualidade:** Alta (não comprimir muito)
- **Evite:** Texto muito pequeno na imagem

---

## 🔍 Estrutura Técnica

### Arquivos Modificados

1. **Schema Sanity** (já existia)
   - `studio/schemaTypes/news.js`
   - Campos: `sourceLabel`, `sourceUrl`, `seo`

2. **Páginas com Meta Tags**
   - `app/news/[slug]/page.jsx` ✅
   - `app/article/[slug]/page.jsx` ✅

3. **Componentes com Display de Fontes**
   - `app/news/[slug]/NewsDetailClient.jsx` ✅
   - `app/article/[slug]/ArticleDetailsClient.jsx` ✅ (recém adicionado)

---

## ✨ Resumo

Você já tem tudo pronto! É só:

1. **No Sanity Studio:** Preencher os campos de fonte (se necessário)
2. **Publicar:** O sistema automaticamente gera as meta tags
3. **Compartilhar:** As redes sociais usarão seus dados personalizados

**Nenhum código adicional necessário!** 🎉
