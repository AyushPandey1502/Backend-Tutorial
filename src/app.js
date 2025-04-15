import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

// CROSS-ORIGIN RESOURCE SHARING
// iT is a security feature implemented by browsers that restricts how web pages from one origin can interact with resources from a different origin.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// Parses incoming JSON requests  (like Content-Type: application/json) with a 16kb size limit to prevent large payloads.
app.use(express.json({limit: "16kb"}))

// // Parses URL-encoded form data with support for nested objects and 16kb limit.
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// Serves static files from the "public" directory.
app.use(express.static("public"))

// Parses cookies from incoming requests and populates req.cookies.
app.use(cookieParser())

export {app}