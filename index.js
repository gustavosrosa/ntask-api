// Importar o framework Express
import express from "express";

// Definir uma porta
const PORT = 3000;

// Chamar o app
const app = express();

// Lambda
app.get("/", (request, response) => response.json({
    status: "Chamada da NTask API"
}));