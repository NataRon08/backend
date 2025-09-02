# Bootcamp Full Stack — Seminarios (CRUD)
Generado automáticamente: 2025-09-02T20:35:46.509062Z

## Estructura
- backend/ — API con Express + Mongoose (MongoDB Atlas)
- frontend/ — HTML + CSS + JS (vanilla) con SweetAlert2

## Instrucciones rápidas (local)
1) Configura MongoDB Atlas y copia tu cadena de conexión.
2) Backend:
   ```bash
   cd backend
   cp .env.example .env
   # Edita .env y coloca tu MONGO_URI
   npm install
   npm start
   # API en http://localhost:4000
   ```
3) Frontend:
   - Abre `frontend/index.html` directo en tu navegador o sirvelo con una extensión de Live Server.
   - En la caja "Configurar API", pega `http://localhost:4000` o la URL de Render cuando lo despliegues.

## Endpoints principales
- GET    /api/seminarios?q=texto
- GET    /api/seminarios/:id
- POST   /api/seminarios
- PUT    /api/seminarios/:id
- DELETE /api/seminarios/:id
