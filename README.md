# 🌐 WebMapTS: Interactive Website Architecture Visualizer

**WebMapTS** is a full-stack TypeScript application that crawls any website and visualizes its internal link structure using an interactive D3.js graph. Built for developers, SEO professionals, and UX designers to understand and debug website structure visually.

## 🧠 Features

- 🔍 Crawls websites using Puppeteer with TypeScript backend
- 🌐 Displays link structure as an interactive graph with D3.js
- 📦 Export sitemap as JSON or XML
- 🧾 Type-safe crawling and rendering
- ⚡ Real-time updates through API


## 🛠️ Tech Stack

- **Client**: TypeScript, React, D3.js
- **Server**: Node.js, Puppeteer, Express
- **Export**: JSON/XML Sitemap


## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Install

```bash
git clone https://github.com/yourusername/webmapts-visualizer-typescript.git
cd webmapts-visualizer-typescript
npm install
```

### Run

```bash
# Start server
npm run server

# In another terminal, start frontend
npm run client
```


## 📂 Project Structure

```
webmapts-visualizer-typescript/
│
├── client/               # React + D3.js UI
│   ├── components/       # GraphVisualizer.tsx
│   └── utils/            # Helper functions
│
├── server/               # Express + Puppeteer crawler
│   └── index.ts
│
├── public/               # Static files
└── README.md
```


## 📤 Export Formats

- `/export/json` — sitemap as JSON
- `/export/xml` — sitemap as XML (Google-compatible)
