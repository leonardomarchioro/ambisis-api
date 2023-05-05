import express, { Express } from "express";
import cors from "cors";
import "express-async-errors";

import companiesRouter from "./routes/companies.routes";

const app: Express = express();

app.use(
    cors({
        origin: "*" 
    })
); 

app.use(express.json());

app.use("/empresa", companiesRouter);

app.get('/healph-check', (req, res) => res.send({ status: "UP" }))

export default app;