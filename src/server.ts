import express from "express"
import routes from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerOutput from "../swagger-output.json";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.use(routes)

app.listen(3000)