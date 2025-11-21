import app from "./app.js";
import dbConnection from "./src/db/dbConnection.js";
import CustomError from "./src/utils/custom.error.js";


dbConnection()
.then(() => {
    app.get("/", (req, res) => {
        res.json({ status : "I am running"});
    })
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`)
    })
})
.catch((error) => {
    throw new CustomError(error.message, error.code || 500)
})