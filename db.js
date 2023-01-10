/**
 * Arquivo responsável por carregar e instanciar a conexão com o banco de dados
 */

import Sequelize from "sequelize";
import fs from "fs";
import path from "path";

let db = null;

module.exports = app => {
    if (!db) {
        // Puxar as configs dentro do arquivo libs/config.js
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        db = {
            sequelize,
            Sequelize,
            models: {} // Preencher essa model
        };

        const dir = path.join(__dirname, models);
        console.log(dir);
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        })
    }
    return db;
}