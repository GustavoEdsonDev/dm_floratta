# dm_floratta

## 🌹 Catálogo Digital de Produtos

Catálogo responsivo e interativo para a loja **DM Floratta**, desenvolvido com **React**, **TypeScript**, **Vite** e **Framer Motion**. A aplicação oferece uma experiência visual elegante e animada para apresentar os produtos com detalhes.

## ✨ Funcionalidades

- 📱 **Design Responsivo** — Funciona perfeitamente em desktop e dispositivos móveis
- ✏️ **Animações Suaves** — Transições elegantes com Framer Motion
- 🗂️ **SPA (Single Page Application)** — Navegação fluida entre catálogo e detalhes de produtos
- 🔗 **Integração WhatsApp** — Botão direto para solicitar produtos via WhatsApp Business
- 📸 **Galeria de Produtos** — 3 produtos com imagens e descrições detalhadas
- 🎨 **UI Modern** — Interface limpa e intuitiva

## 🛍️ Produtos

1. **Buquê DM Floratta** — Arranjo com rosas vermelhas e chocolates artesanais
2. **Caixa de Chocolates** — Chocolate premium em formato de coração com mensagens
3. **Arranjo Especial** — Composição luxuosa com flores, pérolas e acabamento dourado

## 🛠️ Tecnologias Utilizadas

- **React 18** — Biblioteca JavaScript para UI
- **TypeScript** — Tipagem estática para JavaScript
- **Vite** — Build tool rápido e moderno
- **Framer Motion** — Biblioteca de animações para React
- **React Router DOM** — Roteamento para SPA
- **CSS Moderno** — Estilos customizados com responsividade

## 📂 Estrutura do Projeto

```
catalog/
├── src/
│   ├── components/
│   │   ├── Catalog.tsx          (Container do catálogo)
│   │   ├── ProductCard.tsx      (Card reutilizável para produtos)
│   │   ├── ProductDetail.tsx    (Página de detalhe do produto)
│   │   └── ProductDetail.css    (Estilos da página de detalhe)
│   ├── data/
│   │   └── products.ts          (Dados e configurações dos produtos)
│   ├── assets/                  (Imagens dos produtos)
│   ├── App.tsx                  (Componente principal com rotas)
│   ├── App.css                  (Estilos globais)
│   └── main.tsx                 (Ponto de entrada)
├── index.html
├── package.json
└── vite.config.ts
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação

```bash
cd catalog
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação será executada em `http://localhost:5173/`

### Build para Produção

```bash
npm run build
```

## 💡 Como Funciona

1. **Página Inicial** — Mostra o catálogo com cards dos 3 produtos
2. **Clique no Produto** — Navega para a página de detalhe com imagem ampliada e descrição completa
3. **Solicitar via WhatsApp** — Botão que abre conversação no WhatsApp Business
4. **Voltar** — Retorna ao catálogo

## 📞 Contato

Para solicitar produtos, clique em qualquer card e use o botão **"Solicitar via WhatsApp"** para entrar em contato direto.

**WhatsApp Business:** [Clique aqui](https://wa.me/c/242807436517486)

## 📄 Licença

Este projeto é propriedade de **DM Floratta**.
