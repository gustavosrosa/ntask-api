// Importar o framework Express
import consign from "consign";
import express from "express";

// Chamar o app
const app = express();

// Atribuir as rotas
consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes") // Depois chama as rotas
    .then("libs/boot.js")
    .into(app);
