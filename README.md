# TawanMd.github.io — Portfólio Profissional

Portfólio estático de **Thauan Matheus Martins Dutra** — Desenvolvedor Backend com foco em **Integrações, Open Finance, Dados e IA aplicada à automação contábil**, publicado via GitHub Pages em **[tawanmd.github.io](https://tawanmd.github.io)** e pronto para deploy na **Vercel** (`vercel.json`).

## Estrutura

```text
TawanMd.github.io/
├── index.html          # Estrutura semântica e seções do portfólio
├── vercel.json         # Clean URLs, headers de segurança e cache para Vercel
├── css/styles.css      # Design system (Dark/Light), carrossel, timeline e animações
├── js/i18n.js          # Dicionário completo PT / EN
├── js/main.js          # Canvas hero, typing, terminal executável, carrossel, modal e Ctrl+K
└── assets/favicon.svg  # Favicon vetorial TM
```

## Como Visualizar Localmente

```bash
# Usando Python:
python -m http.server 8080

# Ou com Node.js:
npx serve .
```

## Deploy (GitHub Pages e Vercel)

- **GitHub Pages:** qualquer push na branch `main` atualiza automaticamente `https://tawanmd.github.io`.
- **Vercel:** importe o repositório `TawanMd/TawanMd.github.io` no painel da Vercel (sem build step; diretório raiz `.`) e aponte seu domínio customizado na aba **Settings → Domains**.
