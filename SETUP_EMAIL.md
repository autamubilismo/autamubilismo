# Configuração do Envio de E-mail (Resend)

Este guia explica como configurar o envio de e-mails do formulário de contato usando Resend.

## 📋 Pré-requisitos

- Conta no [Resend](https://resend.com) (gratuito até 3.000 e-mails/mês)
- Node.js instalado

## 🚀 Passo a Passo

### 1. Criar conta no Resend

1. Acesse [resend.com](https://resend.com)
2. Clique em "Sign Up" e crie sua conta
3. Confirme seu e-mail

### 2. Obter a API Key

1. Após fazer login, vá para [API Keys](https://resend.com/api-keys)
2. Clique em "Create API Key"
3. Dê um nome (ex: "autamubilismo-production")
4. Copie a chave gerada (você só verá ela uma vez!)

### 3. Configurar Variáveis de Ambiente

1. Abra o arquivo `.env.local` na raiz do projeto
2. Cole sua API Key no lugar indicado:

```env
RESEND_API_KEY=re_sua_chave_aqui
CONTACT_EMAIL=autamubilismo@gmail.com
```

### 4. Instalar Dependências

Execute no terminal:

```bash
npm install resend
```

### 5. Testar Localmente

1. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse a página de contato: `http://localhost:3000/contact`
3. Preencha o formulário e envie
4. Você deverá receber o e-mail em `autamubilismo@gmail.com`

## 🌐 Deploy na Vercel

### Adicionar Variáveis de Ambiente na Vercel

1. Acesse seu projeto no [Vercel Dashboard](https://vercel.com/dashboard)
2. Vá em **Settings** → **Environment Variables**
3. Adicione as seguintes variáveis:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `RESEND_API_KEY` | `re_sua_chave_aqui` | Production, Preview, Development |
| `CONTACT_EMAIL` | `autamubilismo@gmail.com` | Production, Preview, Development |

4. Clique em "Save"
5. Faça um novo deploy ou clique em "Redeploy" no último deploy

## 📧 Configurar Domínio Personalizado (Opcional mas Recomendado)

Por padrão, os e-mails serão enviados de `onboarding@resend.dev`. Para usar seu próprio domínio:

### 1. Adicionar Domínio no Resend

1. Vá para [Domains](https://resend.com/domains) no dashboard do Resend
2. Clique em "Add Domain"
3. Digite seu domínio (ex: `autamubilismo.com`)
4. Resend fornecerá registros DNS (MX, TXT, DKIM) para adicionar

### 2. Adicionar Registros DNS

1. Acesse o painel do seu provedor de domínio (GoDaddy, Namecheap, etc)
2. Vá em DNS/Configurações de Domínio
3. Adicione os registros fornecidos pelo Resend
4. Aguarde a propagação (pode levar até 48h, geralmente 15min)

### 3. Verificar Domínio

1. Volte ao Resend Dashboard
2. Clique em "Verify" ao lado do seu domínio
3. Quando verificado, atualize o código em `app/api/contact/route.js`:

```javascript
from: 'Contato autamubilismo <contato@autamubilismo.com>',
```

## 🐛 Troubleshooting

### E-mail não está sendo enviado

1. Verifique se a API Key está correta no `.env.local` ou Vercel
2. Verifique os logs do Resend: [Logs](https://resend.com/logs)
3. Confirme que reiniciou o servidor após adicionar as variáveis

### E-mail cai no spam

- Isso é normal inicialmente ao usar `onboarding@resend.dev`
- Configure seu próprio domínio para evitar isso
- Adicione SPF, DKIM e DMARC ao seu domínio

### Erro "API key not found"

- Certifique-se de que a variável `RESEND_API_KEY` está no `.env.local`
- Reinicie o servidor de desenvolvimento
- Na Vercel, verifique se a variável foi adicionada e faça redeploy

## 📊 Monitoramento

Você pode acompanhar todos os e-mails enviados em:
- [Resend Logs](https://resend.com/logs) - Logs em tempo real
- [Resend Analytics](https://resend.com/analytics) - Estatísticas de envio

## 💰 Limites do Plano Gratuito

- **3.000 e-mails/mês**
- **100 e-mails/dia**
- Domínio personalizado incluído
- Suporte via Discord

## 📚 Recursos Úteis

- [Documentação Resend](https://resend.com/docs)
- [Resend + Next.js](https://resend.com/docs/send-with-nextjs)
- [Status do Resend](https://status.resend.com)
- [Comunidade Discord](https://discord.gg/resend)

## ✅ Checklist de Configuração

- [ ] Conta criada no Resend
- [ ] API Key obtida e copiada
- [ ] Variável `RESEND_API_KEY` adicionada ao `.env.local`
- [ ] Variável `CONTACT_EMAIL` configurada
- [ ] Pacote `resend` instalado (`npm install resend`)
- [ ] Servidor reiniciado
- [ ] Teste local realizado com sucesso
- [ ] Variáveis adicionadas na Vercel
- [ ] Redeploy feito na Vercel
- [ ] Teste em produção realizado
- [ ] (Opcional) Domínio personalizado configurado

---

**Pronto!** Seu formulário de contato está configurado e funcionando. 🎉
