# 📝 Como Adicionar os Campos no Sanity Cloud

## 🎯 Problema

Os campos **"Nome da fonte"**, **"Link da fonte"** e **"SEO"** (com OG Image) já estão no código local, mas não aparecem no Sanity Cloud.

**Por quê?** O Sanity Cloud precisa que você faça o deploy do schema.

---

## ✅ SOLUÇÃO: Deploy do Schema

### Opção 1: Deploy Manual (Simples)

1. **Abra o terminal na raiz do projeto**

2. **Entre na pasta studio:**
```bash
cd studio
```

3. **Execute o deploy:**
```bash
npx sanity deploy
```

4. **Quando perguntar "Select existing studio hostname":**
   - Use as setas para selecionar **"autamubilismo"**
   - Pressione **Enter**

5. **Aguarde o deploy finalizar**

6. **Recarregue o Sanity Cloud:**
   - Acesse: https://www.sanity.io/manage
   - Entre no projeto "autamubilismo"
   - Clique em "Studio"
   - Pressione **Ctrl+F5** para forçar reload

7. **Pronto!** Os campos aparecerão.

---

## 📋 Campos Que Serão Adicionados

Quando o deploy for concluído, você verá estes campos ao criar/editar notícias e artigos:

### **1. Nome da fonte**
- Campo de texto
- Use para creditar a fonte original
- Exemplo: "Motorsport.com", "Formula1.com"

### **2. Link da fonte**
- Campo de URL
- Link para a matéria original
- Exemplo: "https://www.formula1.com/..."

### **3. SEO (Expandir para ver)**
Dentro desta seção você terá:

#### **Título SEO**
- Título otimizado para compartilhamento
- Exemplo: "Verstappen vence GP da Holanda | Autamubilismo"

#### **Descrição SEO**
- Resumo curto (até 160 caracteres)
- Exemplo: "Max Verstappen dominou do início ao fim..."

#### **Imagem OG**
- Imagem específica para compartilhamento (1200x630px)
- Aparece no WhatsApp, Facebook, Twitter, etc.

---

## 🔧 Alternativa: Adicionar Campos Manualmente

Se o deploy não funcionar, você pode adicionar os campos direto no Sanity Cloud:

### Passos:

1. **Acesse:** https://www.sanity.io/manage

2. **Selecione "autamubilismo"**

3. **Clique em "Schema" no menu lateral**

4. **Clique em "news" (Notícias)**

5. **Clique em "Add field"**

6. **Adicione os campos um por um:**

#### Campo 1: Nome da fonte
```
Name: sourceLabel
Type: String
Title: Nome da fonte
```

#### Campo 2: Link da fonte
```
Name: sourceUrl
Type: URL
Title: Link da fonte
```

#### Campo 3: SEO (Object)
```
Name: seo
Type: Object
Title: SEO

Campos dentro de SEO:
- metaTitle (String): Título SEO
- metaDescription (Text): Descrição SEO
- ogImage (Image): Imagem OG
```

7. **Repita para "articles" (Artigos)**

---

## 🚀 Testando os Campos

Depois do deploy ou adição manual:

1. **Acesse o Sanity Studio:**
   - https://www.sanity.io/manage
   - Projeto "autamubilismo"
   - Clique em "Studio"

2. **Crie uma nova notícia ou edite uma existente**

3. **Role para baixo** - você verá:
   - ✅ Campo "Nome da fonte"
   - ✅ Campo "Link da fonte"
   - ✅ Seção "SEO" (expandir para ver os campos OG)

4. **Preencha os campos**

5. **Clique em "Publish"**

6. **Acesse o site:**
   - http://localhost:3000/news/[slug-da-noticia]
   - O crédito da fonte aparecerá no final do post

---

## 📊 Como os Campos Aparecem no Site

### **No Final da Notícia/Artigo:**

Quando você preenche "Nome da fonte" e "Link da fonte", aparece:

```
┌─────────────────────────────────────┐
│  🔗  FONTE ORIGINAL                 │
│                                     │
│  Motorsport.com →                   │
│  (link clicável para fonte)         │
└─────────────────────────────────────┘
```

### **Ao Compartilhar (WhatsApp, Facebook, etc):**

Quando você preenche os campos SEO, o compartilhamento mostra:

```
┌─────────────────────────────────────┐
│  [IMAGEM OG PERSONALIZADA]          │
├─────────────────────────────────────┤
│  Verstappen vence GP da Holanda    │
│  | Autamubilismo                    │
│                                     │
│  Max Verstappen dominou do início  │
│  ao fim em Zandvoort...            │
│                                     │
│  autamubilismo.com                  │
└─────────────────────────────────────┘
```

---

## 💡 Dicas de Uso

### **Quando usar "Nome da fonte":**
- ✅ Notícia traduzida/adaptada de outro site
- ✅ Informação obtida de fonte específica
- ❌ Artigo 100% original seu (deixe vazio)

### **Campo SEO - Quando preencher:**
- ✅ Notícias importantes (títulos mais chamativos)
- ✅ Quando a imagem de capa não serve para compartilhamento
- ✅ Quando quer otimizar para redes sociais
- ❌ Deixe vazio para usar automático (título + resumo + capa)

### **Imagem OG ideal:**
- **Tamanho:** 1200x630px (16:9)
- **Formato:** JPG ou PNG
- **Texto:** Se houver texto na imagem, use fonte grande
- **Evite:** Imagens muito escuras ou com detalhes pequenos

---

## 🎯 Comando Rápido (Execute Agora)

Abra o terminal e rode:

```bash
cd studio
npx sanity deploy
```

Selecione "autamubilismo" quando perguntar e aguarde finalizar.

Depois recarregue o Sanity Cloud e os campos estarão lá! 🎉

---

## 📚 Estrutura Atual dos Schemas

Os schemas locais já estão corretos com todos os campos:

- ✅ **studio/schemaTypes/news.js** → sourceLabel, sourceUrl, seo
- ✅ **studio/schemaTypes/article.js** → Herda de news
- ✅ **studio/schemaTypes/articles.js** → Herda de news
- ✅ **studio/schemaTypes/seo.js** → metaTitle, metaDescription, ogImage

**Só falta fazer o deploy para sincronizar com o Cloud!**
