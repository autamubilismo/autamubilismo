# ✅ SOLUÇÃO: Como Acessar Tudo

## 🎯 Status Atual

### ✅ Site Next.js - FUNCIONANDO
- **URL:** `http://localhost:3000`
- **Status:** 200 OK
- **Rodando agora!**

### ⚠️ Sanity Studio - PRECISA INICIAR SEPARADAMENTE
- **URL:** `http://localhost:3333`
- **Status:** Não iniciado
- **Ação necessária:** Abrir novo terminal

---

## 🚀 SIGA ESTES PASSOS AGORA

### PASSO 1: Site Já Está Rodando ✅
O Next.js já está funcionando! **Abra no navegador:**
```
http://localhost:3000
```

---

### PASSO 2: Iniciar o Sanity Studio

**Opção A - Usando o Script (Windows):**
1. Vá até a pasta do projeto no Explorer
2. Clique 2x no arquivo `start-studio.bat`
3. Uma janela preta vai abrir
4. Aguarde aparecer "Studio ready"
5. Acesse: `http://localhost:3333`

**Opção B - Usando Novo Terminal:**
1. Abra uma **NOVA janela** do terminal (não feche a atual!)
2. Navegue até a pasta do projeto:
   ```bash
   cd c:\Users\tamar\Desktop\autamubilismo
   ```
3. Entre na pasta studio:
   ```bash
   cd studio
   ```
4. Inicie o Studio:
   ```bash
   npm run dev
   ```
5. Aguarde aparecer: `Local: http://localhost:3333`
6. Acesse: `http://localhost:3333`

---

## 📺 Você Terá 2 Janelas Abertas

```
┌──────────────────────────────┐
│  TERMINAL 1 (Já rodando)     │
│  npm run dev                 │
│  ✓ Ready in 1475ms           │
│  Site: localhost:3000  ✅    │
└──────────────────────────────┘

┌──────────────────────────────┐
│  TERMINAL 2 (Abra agora!)    │
│  cd studio                   │
│  npm run dev                 │
│  Studio: localhost:3333  ⏳  │
└──────────────────────────────┘
```

---

## 🌐 URLs Para Acessar

Depois que os 2 terminais estiverem rodando:

### **Site (Frontend Público)**
```
http://localhost:3000
```
- Página inicial
- Notícias
- Artigos
- Todo o conteúdo público

### **Studio (Painel Admin)**
```
http://localhost:3333
```
- Login com conta Sanity
- Criar/editar notícias
- Criar/editar artigos
- Gerenciar conteúdo

---

## ⚠️ Por Que Não Funciona em /studio?

O Sanity Studio **NÃO está integrado** ao Next.js neste projeto.

São 2 aplicações separadas:
- Next.js roda na porta **3000**
- Sanity roda na porta **3333**

**Não tente acessar** `http://localhost:3000/studio` - vai dar 404!

**Acesse direto:** `http://localhost:3333`

---

## 🔍 Como Verificar se Está Funcionando

### Next.js (Terminal 1):
```
✓ Ready in 1475ms
 GET / 200 in 10.3s
```
✅ **Funcionando!**

### Sanity Studio (Terminal 2):
```
✓ Checking configuration files...
✓ Compiling...
Local:     http://localhost:3333

Studio ready in 5s
```
✅ **Funcionando!**

---

## 💡 Dica Visual

Quando tudo estiver funcionando, você verá:

**No navegador:**
- **Aba 1:** `localhost:3000` → Site com tema pink/dark
- **Aba 2:** `localhost:3333` → Sanity Studio (preto/azul)

---

## 🆘 Se Não Abrir o Studio

### Erro Comum: "Cannot GET /"
Significa que o Studio não está rodando na porta 3333.

**Solução:**
1. Feche todos os terminais
2. Abra 2 terminais novos
3. Terminal 1: `npm run dev`
4. Terminal 2: `cd studio && npm run dev`

### Erro: "Port already in use"
```bash
# Mate todos os Node
taskkill //F //IM node.exe

# Reinicie
npm run dev
cd studio && npm run dev
```

---

## ✨ Resumo Ultra Rápido

**VOCÊ PRECISA FAZER AGORA:**

1. ✅ Site já está rodando em: `http://localhost:3000`
2. ⏳ Abra NOVO terminal
3. ⏳ Digite: `cd studio && npm run dev`
4. ⏳ Aguarde: "Studio ready"
5. ✅ Acesse: `http://localhost:3333`

**PRONTO!** 🎉

---

## 📱 Login no Studio

Quando acessar `localhost:3333`:

1. Clique em "Sign in"
2. Escolha Google, GitHub ou Email
3. Autorize o projeto "autamubilismo"
4. Entre no painel!

---

**Agora execute:**
```bash
cd studio
npm run dev
```

Depois acesse: `http://localhost:3333`
