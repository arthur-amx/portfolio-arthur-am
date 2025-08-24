# **Portfólio Profissional v2.0 - `A.A.M. OS`**

### **[LIVE DEMO ->](https://link-do-seu-site.vercel.app/)**

---

## **1. Descrição do Projeto (System Overview)**

Este projeto é uma reinterpretação radical de um portfólio web, concebido como uma **experiência interativa imersiva**. Em vez de um site tradicional, o usuário "acessa" um sistema operacional fictício, o `A.A.M. OS`, apresentado como um dashboard de monitoramento com uma estética cyberpunk.

O objetivo é apresentar minha trajetória, habilidades e projetos de uma forma que não apenas informa, mas também demonstra proficiência técnica e criatividade, utilizando um hub 3D interativo como plano de fundo e uma UI reativa para navegação.

## **2. Pilha de Tecnologias (Core Stack)**

A arquitetura do `A.A.M. OS` foi construída com as seguintes tecnologias:

#### **Front-end & UI**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### **3D & Animação**
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-000000?style=for-the-badge&logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

#### **Backend (Formulário de Contato)**
![EmailJS](https://img.shields.io/badge/EmailJS-1C8249?style=for-the-badge&logo=javascript&logoColor=white)

#### **Cloud & DevOps (Hospedagem)**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---
*A lista completa de tecnologias que domino, com base na minha experiência profissional, inclui:*

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![GitLab CI](https://img.shields.io/badge/GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

## **3. Estrutura de Diretórios (System Architecture)**

```portfolio-aam-os/
├── public/                  # Assets estáticos
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ThreeScene.tsx   # Renderização da cena 3D de fundo
│   │   ├── Header.tsx       # Cabeçalho da UI
│   │   ├── Dashboard.tsx    # Orquestrador da navegação e conteúdo
│   │   ├── OverviewPanel.tsx  # Seção "Sobre Mim"
│   │   ├── ProjectsPanel.tsx  # Seção "Projetos"
│   │   ├── ExperiencePanel.tsx# Seção "Experiências"
│   │   └── ContactPanel.tsx   # Seção "Contato" com formulário
│   ├── App.tsx              # Componente raiz da aplicação
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais e diretivas do Tailwind
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## **4. Execução Local (Local Deployment)**

Para clonar e rodar este projeto em seu ambiente local, siga os passos abaixo.

**Pré-requisitos:**
*   Node.js (v18 ou superior)
*   npm ou yarn

**Passo 1: Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio-aam-os.git
cd portfolio-aam-os
```

**Passo 2: Instale as dependências**```bash
npm install
```

**Passo 3: Configure as variáveis de ambiente (para o formulário)**
Crie um arquivo chamado `.env` na raiz do projeto e adicione suas chaves do EmailJS:
```
VITE_EMAILJS_SERVICE_ID=SEU_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=SEU_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=SUA_PUBLIC_KEY
```

**Passo 4: Rode o servidor de desenvolvimento**
```bash
npm run dev
```
O sistema estará disponível em `http://localhost:5173`.