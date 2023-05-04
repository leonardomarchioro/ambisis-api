import app from "./app";
import { config } from "dotenv";
import { prisma } from "./prisma/client";

config();

const PORT = process.env.PORT || 3000;

async function bootStrap() {
    await prisma.$connect();

    app.listen(PORT, () => console.log(`App is running at port: ${PORT}`))
};

bootStrap();