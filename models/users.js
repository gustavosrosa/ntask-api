const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true, // Nao permite emails repetidos
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
     {
        classMethods: {
            associate: (models)  => {
                Users.hasMany(Tasks);
            } 
        }
     })
     return Users;
};