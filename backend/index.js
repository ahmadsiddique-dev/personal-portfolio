import app from "./app.js";
import dbConnection from "./src/db/dbConnection.js";
import CustomError from "./src/utils/custom.error.js";


dbConnection() // since dbConnection returns a promies so i'm using it in a wrong way so that i can make sure db is connected
.then(() => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`)
    })
})
.catch((error) => {
    throw new CustomError(error.message, error.code || 500)
})