module.exports = app => {
    app.get("/", (request, response) => {
        response.json("Ntask - API")
    })
}