import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/msgRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

// Enable CORS with specific origin
const corsOpts = {
    origin: 'http://localhost:5173', // Specify the exact origin of your frontend
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;





// import express from "express";
// import { dbConnection } from "./database/dbConnection.js";
// import dotenv from "dotenv";
// import messageRouter from "./router/msgRouter.js";
// import cors from "cors";

// const app = express();

// dotenv.config({ path: "./config/config.env" });


// // app.use((req, res, next) => {
// //   // res.setHeader("Access-Control-Allow-Origin", "*");
// //   // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //   // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// //   // next();
// // });

// const corsOpts = {
//     origin: '*',
//     credentials: true,
//     methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
//     allowedHeaders: ['Content-Type'],
//     exposedHeaders: ['Content-Type']
// };
// app.use(cors(corsOpts));

// // app.use(
// //   cors({
// //     origin: [process.env.FRONTEND_URL],
// //     methods: ["POST"],
// //     credentials: true,
// //   })
// // );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/message", messageRouter);

// dbConnection();

// export default app;