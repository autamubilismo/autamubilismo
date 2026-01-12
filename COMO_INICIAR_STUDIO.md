# 🚀 Como Iniciar o Sanity Studio

## ✅ Correções Aplicadas

Todos os arquivos do Sanity Studio foram corrigidos e o BOM (Byte Order Mark) foi removido. O Studio está pronto para funcionar!

---

## 📍 3 Maneiras de Acessar o Studio

### **OPÇÃO 1: Via Next.js (Recomendada - Mais Simples)**

Essa é a forma mais fácil e rápida:

1. **Abra o terminal na pasta do projeto**

2. **Inicie o Next.js:**
```bash
npm run dev
```

3. **Acesse no navegador:**
```
http://localhost:3000/studio
```

4. **Faça login** com sua conta do Sanity
   - Use Google, GitHub ou email
   - Autorize o projeto quando solicitado

✅ **Pronto!** O Studio está rodando integrado ao seu site.

---

### **OPÇÃO 2: Studio Standalone (Windows)**

Use o script que criei para facilitar:

1. **Na pasta do projeto, clique 2x no arquivo:**
```
start-studio.bat
```

2. **Aguarde abrir a janela preta** do terminal

3. **Quando aparecer a mensagem de sucesso, acesse:**
```
http://localhost:3333
```

---

### **OPÇÃO 3: Studio Standalone (Terminal)**

Para quem prefere linha de comando:

1. **Abra o terminal na pasta do projeto**

2. **Entre na pasta do Studio:**
```bash
cd studio
```

3. **Inicie o Studio:**
```bash
npm run dev
```

4. **Acesse:**
```
http://localhost:3333
```

---

## 🔍 Verificar se Está Funcionando

### Sinais de Sucesso:

Quando o Studio iniciar corretamente, você verá no terminal:

```
✓ Checking configuration files...
✓ Compiling...
✓ Types ready

Local:     http://localhost:3333
Network:   http://192.168.x.x:3333

Studio ready in Xms
```

### No Navegador:

Você verá a tela de login do Sanity:
- Logo do Sanity
- Botões de login (Google, GitHub, Email)
- "Sign in to Autamubilismo"

---

## ⚠️ Problemas Comuns

### 1. "Port 3333 is already in use"

**Solução:** Outra aplicação está usando a porta.

**Windows:**
```bash
netstat -ano | findstr :3333
taskkill /PID [número_do_PID] /F
```

Depois rode `npm run dev` novamente.

### 2. "Cannot find module 'sanity'"

**Solução:** Instalar dependências do Studio.

```bash
cd studio
npm install
```

### 3. "Error: ENOENT: no such file or directory"

**Solução:** Você não está na pasta correta.

```bash
# Vá para a pasta do projeto primeiro
cd c:\Users\tamar\Desktop\autamubilismo

# Depois entre no studio
cd studio
npm run dev
```

### 4. Terminal não mostra nada após "Starting dev server"

**Solução:** Aguarde 30-60 segundos. A primeira inicialização demora.

Se demorar muito:
1. Feche o terminal (Ctrl+C)
2. Tente novamente: `npm run dev`

---

## 📝 Editando Conteúdo

Após fazer login no Studio:

### 1. **Menu Lateral Esquerdo:**
- **Noticias** → Lista todas as notícias
- **Artigo** / **Artigos** → Artigos opinativos

### 2. **Criar Nova Notícia:**
- Clique em "Noticias"
- Botão **"+ Create"** no canto superior direito
- Preencha os campos
- Botão **"Publish"** para publicar

### 3. **Editar Notícia Existente:**
- Clique em "Noticias"
- Clique na notícia que quer editar
- Faça as alterações
- Botão **"Publish"** para salvar

### 4. **Campos Importantes:**

**Campos Obrigatórios:**
- ✅ Título
- ✅ Slug (gera automaticamente do título)
- ✅ Resumo (excerpt)
- ✅ Imagem
- ✅ Categoria
- ✅ Data de publicação

**Para Creditar Fonte:**
- 📰 **Nome da fonte** → Ex: "Formula1.com"
- 🔗 **Link da fonte** → URL completa

**Para Otimizar Compartilhamento:**
- 🔍 **SEO** (expandir seção)
  - Título SEO
  - Descrição SEO
  - Imagem OG (1200x630px ideal)

---

## 🎯 Atalhos Úteis

### Comandos Principais:

```bash
# Iniciar o site Next.js (inclui Studio em /studio)
npm run dev

# Iniciar Studio standalone
cd studio && npm run dev

# Build do Studio para produção
npm run studio:build

# Instalar dependências
npm install
cd studio && npm install
```

---

## 🌐 Studio em Produção

O Sanity Studio também funciona em produção! Quando você fizer deploy:

**Vercel/Netlify:**
```
https://autamubilismo.com/studio
```

O Studio é hospedado junto com seu site Next.js.

---

## ✅ Checklist de Verificação

Antes de usar o Studio, confirme:

- [ ] Node.js instalado (versão 18+)
- [ ] Dependências instaladas (`npm install` na raiz E na pasta studio)
- [ ] Arquivos corrigidos (BOM removido) ✅
- [ ] Conta no Sanity criada
- [ ] Acesso ao projeto `c7nvssn2` autorizado

---

## 🆘 Precisa de Ajuda?

Se nada funcionar:

1. **Reinstale as dependências:**
```bash
# Na raiz do projeto
npm install

# No Studio
cd studio
npm install
```

2. **Limpe o cache do Next.js:**
```bash
# Na raiz
rm -rf .next
npm run dev
```

3. **Verifique o arquivo .env.local:**
Deve conter as variáveis do Sanity se necessário.

---

## 🎉 Resumo Rápido

**Forma mais rápida de começar:**

```bash
npm run dev
```

Depois acesse: `http://localhost:3000/studio`

**É isso!** 🚀
