import express from "express";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import cardRouter from "./src/features/card/card.routes.js";
import userRouter from "./src/features/user/user.routes.js";

const server = express();
server.use(express.json());

server.use('/cards', cardRouter);
server.use('/users', userRouter);

server.listen(4000, () => {
    console.log("Server is running at 4000");
    connectUsingMongoose();
})