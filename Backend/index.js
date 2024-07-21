import express from "express";
import cors from "cors";
import { ConnectDb } from "./Services/db.js";
import userRouter from "./Routes/mainRouter.js";
import bodyParser from "body-parser";


const app = express();
const PORT = 3000;
const router = express.Router();


app.use(express.json()); // to parse json to post request
app.use(cors());
app.use(bodyParser.json());


app.use("/api/v1", userRouter);



ConnectDb()
    .then(() => {
        console.log("Your Mongodb is coonected");
        app.listen(PORT, () => {
            console.log(`Your Server is running at Port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDb is not connected due to some error");
        console.log(err);
    })

