// Importar o framework Express
import consign from "consign";
import express from "express";

// Definir uma porta
const PORT = 3000;

// Chamar o app
const app = express();

// Primeiro endpoint
app.get("/", (request, response) => response.json({
    status: "Chamada da NTask API"
}));

// Formatar o JSON
app.set("json spaces", 4);

// Atribuir as rotas
consign()
    .include("routes")
    .into(app);

// Subir a aplicação e mostrar resultado no terminal
app.listen(PORT, () => console.log(`NTask API - Porta ${PORT}`));