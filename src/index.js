// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// dotenv loads environment variables from a .env file into process.env.
// then you must load them before this line executes. Otherwise, process.env.PORT will be undefined.

import connectDB from "./db/index.js";
// import {app} from

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!", err);
})










/*

// FIRST APPROACH: Since `index.js` is the entry point of the application,
// we can establish the database connection as soon as this file runs.

import express from "express"
const app = express()

// Always use async/await with a try-catch block when connecting to the database,
// as the operation is asynchronous and may fail due to timeouts or other issues.


// This approach runs an asynchronous function immediately as soon as the file is executed
//(async () => {
  // Your async code here
//})();

// This is called an Immediately Invoked Async Function Expression (IIAFE).
// It’s useful when you want to run async code at the top level without defining and calling a separate function.


(async  () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error){
        console.error("ERROR : ", error)
        throw error
    }
})()

*/