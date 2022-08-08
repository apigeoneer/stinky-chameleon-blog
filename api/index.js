const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("::::::: Connected to Mongodb :::::::");
}

app.listen("5000", () => {
    console.log('::::::: Backend is running yayyyay! :::::::');
});