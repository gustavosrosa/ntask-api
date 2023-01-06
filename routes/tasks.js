module.exports = app => {
    const modelTasks = app.models.tasks;
    app.get("/tasks", (request, response) => {
        modelTasks.findAll({}, (tasks) => {
            response.json({tasks: tasks});
        })
    })
}