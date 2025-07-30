import dotenv from "dotenv";
dotenv.config();


import express from "express";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import cardRouter from "./src/features/card/card.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import homeRouter from "./src/features/home/home.routes.js";

import cors from 'cors';



const server = express();
server.use(cors());
server.use(express.json());

server.use('/cards', cardRouter);
server.use('/users', userRouter);
server.use('/homes', homeRouter);

server.listen(4000, '0.0.0.0', () => {
    console.log("Server is running at 4000");
    connectUsingMongoose();
})