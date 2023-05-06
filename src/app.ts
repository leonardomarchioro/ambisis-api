import "express-async-errors";
import express, { Express } from "express";

import cors from "cors";

// doc
import swaggerUi from "swagger-ui-express";
import docJson from "./swagger/doc.json";

// routers
import companiesRouter from "./routes/companies.routes";

// handlers
import errorHandler from "./middlewares/error-handler.middleware";

const app: Express = express();

app.use(
    cors({
        origin: "*" 
    })
); 

app.use(express.json());

app.use("/empresa", companiesRouter);

app.get('/healph-check', (req, res) => res.send({ status: "UP" }))
app.use("/docs", swaggerUi.serve, swaggerUi.setup(docJson))

app.use(errorHandler);

export default app;