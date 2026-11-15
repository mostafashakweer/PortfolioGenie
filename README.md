# 🚀 PortfolioGenie

**Smart Portfolio Builder for Developers**

PortfolioGenie is a smart platform designed to help junior developers build professional portfolios by analyzing their GitHub activity and generating personalized, SEO-friendly content that showcases their skills and projects.

## 📌 Project Overview

PortfolioGenie simplifies the process of creating a professional developer portfolio. By connecting with GitHub, developers can highlight their repositories, showcase their technical skills, and generate personalized portfolio content.

Our goal is to help junior developers present their work effectively and build a stronger professional online presence.

## ✨ Features

- **GitHub Integration:** Analyze GitHub repositories and coding activity.
- **AI-Powered Content Generation:** Generate personalized portfolio descriptions and an engaging About Me section.
- **Live Portfolio Preview:** Preview portfolio changes while editing.
- **Customizable Portfolio:** Organize personal information, skills, and projects.
- **SEO-Friendly Content:** Improve portfolio content for better discoverability.
- **Responsive Design:** Provide a smooth experience across desktop, tablet, and mobile devices.

## 🛠️ Technologies

- **Frontend:** React.js, TypeScript, Vite (deployed separately on Vercel)
- **Backend:** Node.js HTTP API (`backend/node`)
- **Routing:** React Router
- **Code Quality:** ESLint
- **Version Control:** Git & GitHub

*Additional technologies may be added as development progresses.*

## 👥 Team

This project is developed collaboratively by a team of developers.

- **Team Members:**
  - Rashid Reda — **Team Leader**
  - Hazem Mohamed
  - Mostafa Mamdouh
  - Hind Tamer
  - Walaa Gamal

## 📚 Documentation

Project documentation, design resources, and implementation details will be added as development progresses.

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm
- Git

### Frontend

The Vercel frontend project continues to use `frontend/` as its project root.

```bash
cd frontend
npm install
npm run dev
```

### Backend

In a separate terminal, start the API:

```bash
cd backend/node
npm install
npm start
```

The initial API provides `GET /api/health`. Run its tests with `npm test` from `backend/node`. Deploy the API as a separate Node.js service; see [`backend/node/README.md`](backend/node/README.md) for runtime and CORS configuration. No application data or AI endpoints have been wired to the backend yet.

## 🤝 Contributing

Contributions from team members are welcome. Please work on separate feature branches and submit changes through pull requests to keep the main branch stable.

## 📄 License

The license will be specified later.
