module.exports = app => {
    app.get("/tasks", (request, response) => {
        response.json({
            tasks: [
                {title: "Fazer compras"},
                {title: "Consertar o micro"}
            ]
        })
    })
}