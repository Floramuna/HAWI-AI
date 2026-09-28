HAWI-AI

Decentralized AI Knowledge Companion for DeFi — Built on the Internet Computer

Overview
HAWI-AI is a decentralized AI-powered assistant designed to help users understand Decentralized Finance (DeFi) in a simple, secure, and interactive way.
The platform uses AI running on the Internet Computer (ICP) to provide users with explanations, learning guidance, and insights about DeFi without relying on external APIs.
Unlike traditional AI assistants, HAWI-AI runs fully on-chain, ensuring privacy, transparency, and decentralization.

Problem
The DeFi ecosystem is growing rapidly, but many users face major challenges:
Lack of clear educational resources
Complex technical terminology
High risk of scams and misinformation
Limited AI tools that respect user privacy

Most AI tools rely on centralized APIs, which introduces issues like:
Data privacy concerns
API costs
Dependence on centralized providers

Solution
HAWI-AI solves these problems by providing:
A decentralized AI assistant
DeFi education through interactive chat
On-chain AI inference using Internet Computer canisters
No external APIs
Private and secure user interaction
Users can ask questions about DeFi and receive intelligent responses directly from the blockchain.

Key Features
AI Chat Interface
Ask questions about DeFi concepts, protocols, and blockchain topics.
Fully On-Chain AI
Uses LLM canisters on the Internet Computer instead of external APIs.
Decentralized Architecture
All backend logic runs in Motoko smart contracts (canisters).
Interactive UI
Modern interface built with React, TypeScript, and TailwindCSS.
Secure & Private
No centralized servers handling AI requests.

Architecture
HAWI-AI follows a three-layer architecture:
Frontend (React + Vite + Tailwind)
        ↓
Backend Canister (Motoko)
        ↓
LLM Canister (On-chain AI)

Components
Frontend
React
TypeScript
TailwindCSS
Vite

Backend
Motoko smart contract
Handles user input
Communicates with AI logic
AI Layer
LLM Canister
Generates responses for user queries

Project Structure
HAWI-AI
│
├── src
│   ├── backend
│   │   ├── main.mo
│   │   └── types.mo
│   │
│   └── frontend
│       ├── src
│       ├── components
│       ├── pages
│       └── vite.config.ts
│
├── dfx.json
├── vessel.dhall
└── README.md

Technology Stack
Blockchain
Internet Computer (ICP)
Canisters
Backend
Motoko

Frontend
React
TypeScript
Vite
TailwindCSS
shadcn UI
Development Tools
DFX SDK
Node.js
npm
Git
WSL

Installation & Setup
1. Clone the repository
git clone https://github.com/Floramuna/HAWI-AI.git
cd HAWI-AI
2. Start the Internet Computer local replica
dfx start --clean --background
3. Build the frontend
cd src/frontend
npm install
npm run build
4. Deploy the canisters
cd ../../
dfx deploy
5. Open the application

DFX will provide a URL like:
http://<frontend-canister-id>.localhost:4943

Open it in your browser.
Future Improvements

Planned features for HAWI-AI include:
Wallet integration
DeFi risk analysis
Smart portfolio insights
AI-powered investment education
Real-time DeFi analytics
Multi-language support

Author
Muna (Flora Muna)
Computer Science Student – Kiriri Women’s University

GitHub:
https://github.com/Floramuna
