const express = require("express");
const app = express();
const PORT = 3000;

app.use(express());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Your Server is running at Port ${PORT}`);
});