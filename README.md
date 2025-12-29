<p align="center">
  <img src="https://raw.githubusercontent.com/your-org/bluechain/main/assets/bluechain-logo.png" width="120" />
</p>

<h1 align="center">BlueChain</h1>

<p align="center">
  <b>Proof-Driven Climate Action</b><br/>
  A Blockchain-enabled MRV platform for verified carbon restoration
</p>

<p align="center">
  <img src="https://img.shields.io/badge/frontend-React-blue" />
  <img src="https://img.shields.io/badge/backend-FastAPI-green" />
  <img src="https://img.shields.io/badge/ML-PyTorch-orange" />
  <img src="https://img.shields.io/badge/blockchain-ready-lightgrey" />
</p>

---

## 🌍 Overview

**BlueChain** is a **Measurement, Reporting & Verification (MRV)** platform designed to bring **trust, transparency, and scalability** to climate restoration initiatives.

It enables:
- NGOs to submit verified land restoration projects  
- Validators to audit using real-world data (images + environment metrics)  
- Industries to offset emissions via **verified carbon credits**  
- Governments & institutions to rely on **audit-ready MRV data**

BlueChain combines **Machine Learning**, **Web technologies**, and **Blockchain-ready architecture** to ensure that **every carbon credit is backed by proof**.

---

## Core Features

- **Vegetation Area Estimation** using image segmentation (ML)
- **NDVI-based Biomass Estimation**
- **Climate-aware Growth Prediction** (temperature, humidity, pH, salinity)
- **Scientific Carbon Credit Calculation** (tCO₂/year)
- **Blockchain-ready mint & retire workflow**
- **Web interface** for Validators, NGOs, and Industries

---

## Tech Stack

### Frontend
- **React.js**
- HTML, CSS, JavaScript
- REST API integration

### Backend
- **FastAPI**
- Python 3.9+
- Uvicorn ASGI server

### Machine Learning
- PyTorch
- Computer Vision (Segmentation)
- Remote Sensing (NDVI)
- Regression Models (Growth Prediction)

### Blockchain (Integration-ready)
- Oracle-based architecture
- Token mint/burn logic (MRV-driven)



---

## Getting Started (Run Locally)

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+)
- **npm**
- **Python** (v3.9+)
- **pip**

---

## Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Backend Setup (FastAPI)
```bash
cd backend
pip install -r requirements.txt
```

Run the FastAPI server:
```bash
uvicorn app:app --reload
```

Interactive API docs:
```bash
http://localhost:8000/docs
```
---
Contributors

Built with ❤️ by Team JetBrains
Hackathon Project | Climate Tech | MRV Systems
