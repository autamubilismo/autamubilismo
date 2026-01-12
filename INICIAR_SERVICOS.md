# 🚀 Como Iniciar os Serviços

## ⚠️ IMPORTANTE: 2 Servidores Separados

O projeto tem **2 servidores que rodam SEPARADAMENTE**:

1. **Next.js** (Site) - Porta 3000
2. **Sanity Studio** (Painel Admin) - Porta 3333

Você precisa abrir **2 terminais** ou usar os scripts.

---

## 📝 Opção 1: Manual (2 Terminais)

### Terminal 1 - Next.js (Site)
```bash
npm run dev
```
✅ Acesse: `http://localhost:3000`

### Terminal 2 - Sanity Studio (Admin)
```bash
cd studio
npm run dev
```
✅ Acesse: `http://localhost:3333`

---

## 🖱️ Opção 2: Scripts Automáticos (Windows)

### 1. Iniciar o Site (Next.js)
Abra o terminal na raiz e rode:
```bash
npm run dev
```

### 2. Iniciar o Studio (Sanity)
**Clique 2x no arquivo:**
```
start-studio.bat
```

Ou abra outro terminal e rode:
```bash
cd studio
npm run dev
```

---

## ✅ Como Saber se Está Funcionando

### **Site Next.js (Terminal 1):**
Você verá:
```
▲ Next.js 16.1.1 (Turbopack)
- Local:         http://localhost:3000
✓ Ready in 1.5s
```

✅ **Teste:** Abra `http://localhost:3000` no navegador

---

### **Sanity Studio (Terminal 2):**
Você verá:
```
✓ Checking configuration files...
✓ Compiling...
Studio ready in Xms

Local:     http://localhost:3333
```

✅ **Teste:** Abra `http://localhost:3333` no navegador

---

## 🎯 Resumo Rápido

**Para usar o site completo:**

1. **Terminal 1:**
   ```bash
   npm run dev
   ```

2. **Terminal 2 (nova janela):**
   ```bash
   cd studio
   npm run dev
   ```

3. **Acesse:**
   - Site: `http://localhost:3000`
   - Admin: `http://localhost:3333`

---

## 🔧 Resolução de Problemas

### "Port 3000 is already in use"
```bash
# Mate todos os processos Node
taskkill //F //IM node.exe

# Inicie novamente
npm run dev
```

### "Port 3333 is already in use"
```bash
# Mate todos os processos Node
taskkill //F //IM node.exe

# Inicie novamente
cd studio
npm run dev
```

### Erro "Cannot find module"
```bash
# Reinstale as dependências
npm install
cd studio && npm install
```

### Limpar cache
```bash
# Na raiz
rm -rf .next
npm run dev
```

---

## 📋 Status Atual dos Servidores

### ✅ Next.js - FUNCIONANDO
- Porta: **3000**
- URL: `http://localhost:3000`
- Status: **200 OK**

### ⏳ Sanity Studio - PRECISA INICIAR
- Porta: **3333**
- URL: `http://localhost:3333`
- Status: **Aguardando início**

---

## 🎓 Por Que São Separados?

**Next.js (3000):**
- Site público
- Frontend React
- APIs
- SSR/SSG

**Sanity Studio (3333):**
- Painel administrativo
- Editor de conteúdo
- CMS
- Não é parte do site público

---

## 💡 Dica: Manter Ambos Rodando

Durante desenvolvimento, deixe **ambos os terminais abertos**:

```
┌─────────────────────┐  ┌─────────────────────┐
│  Terminal 1         │  │  Terminal 2         │
│  npm run dev        │  │  cd studio          │
│  (Next.js :3000)    │  │  npm run dev        │
│                     │  │  (Sanity :3333)     │
└─────────────────────┘  └─────────────────────┘
```

Assim você pode:
- Editar conteúdo no Studio (:3333)
- Ver as mudanças no Site (:3000)

---

## 🚀 Próximo Passo

**Execute agora:**

```bash
cd studio
npm run dev
```

Depois acesse: `http://localhost:3333`
