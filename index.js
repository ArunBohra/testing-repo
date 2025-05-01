import express from "express";

const app = express();

console.log(process.env.TEST_ENV_VALUE);

app.listen(8000, () => console.log("Listening..."));
