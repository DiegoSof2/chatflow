# ChatFlow — Projeto Astro

## Estrutura

```
src/
├── content/
│   └── blog/          ← Posts em Markdown (.md)
├── layouts/
│   ├── Layout.astro   ← Base com nav, footer, ViewTransitions
│   └── BlogPost.astro ← Layout do post com prose styles
├── pages/
│   ├── index.astro    ← Landing page
│   └── blog/
│       ├── index.astro   ← Listagem do blog
│       └── [slug].astro  ← Página dinâmica de cada post
└── styles/
    └── global.css     ← Variáveis e estilos globais
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:4321

## Como criar um novo post

Crie um arquivo `.md` em `src/content/blog/`:

```markdown
---
title: "Título do artigo"
description: "Descrição curta para SEO e cards"
pubDate: 2026-03-01
category: "Atendimento"         # Atendimento | Vendas | Automação | WhatsApp | Presença Digital
icon: "🎯"
accentColor: "#1A5C38"          # Cor do hero do post
readTime: "5 min de leitura"
featured: false                  # true = aparece como destaque na listagem
---

Conteúdo em Markdown aqui.

## Subtítulo

Parágrafo normal, **negrito**, *itálico*.

> Citação em destaque

- Lista
- De itens
```

## Build para produção

```bash
npm run build
```

Faz deploy na Vercel, Netlify ou GitHub Pages — basta conectar o repositório.

## Animações

- **ViewTransitions** do Astro: transição suave entre páginas (fade + scale)
- **`transition:name`**: anima o card clicado até o hero do post
- **Reveal on scroll**: `IntersectionObserver` re-executado após cada navegação via `astro:page-load`
