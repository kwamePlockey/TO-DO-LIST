const express = require('express');
const router = require("./routes.js");
const mongoose = require('mongoose');
const app = express();
//console app, understand what express returns
require('dotenv').config();

app.use(express.json());

app.use('/to-do', router);

const startServer = async () => {
    try {
        const dB = await mongoose.connect(process.env.MONGODB_URL)

        app.listen(process.env.PORT_NUMBER, () => (
            console.log(`Server listening on http://localhost:${process.env.PORT_NUMBER}`)
        ))

    } catch (error) {
        console.log(`server/db connection err, ${error}`)
    }
   
}

startServer()