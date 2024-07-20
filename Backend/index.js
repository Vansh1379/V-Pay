import express from "express";
import cors from "cors";
import { ConnectDb } from "./Services/db.js";


const app = express();
const PORT = 3000;

app.use(express());
app.use(cors());

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

