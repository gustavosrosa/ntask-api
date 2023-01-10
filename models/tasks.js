const sequelize = require("sequelize");

module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false // Se não passado nada vai ser false
        },

    },
    {classMethods: {
        associate: (models) => {
            Tasks.belongsTo(models.Users)
        }
    }});

    return Tasks;
}