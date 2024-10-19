import express from "express";
import logger from "morgan";
import cors from "cors";

// import router from routes folder
import { router as contactsRouter } from "./routes/api/contactsRouter.js";

// initialize an express application
const app = express();

// we will retirieve the environment variable using CROS_ENV that is preinstalled with this boilerplate
//we are creating an instance of a logger funtion
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// we will apply the use function to implement a middleware
// pass the format logger function to the MORGAN package using the logger function
// middle ware is a logger function coming from MORGAN
// we are passing formtslogger as the value of our logger function
app.use(logger(formatsLogger));
app.use(cors());
//this is the JSON parser middleware
app.use(express.json());


// initialize the base path for the contacts router
app.use('/api/contacts', contactsRouter);

// this is error handling using res.status()
//not found
app.use((_req, res) => {
  res.status(404).json({ message: 'App Not found' })
});

//server error
app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message })
});

console.log("this is the app.js");

// export the express application
export {app} ;

// IMPORT MODULES
// IMPORT ENVIRONMENT VARIALBLES
// IMPORT AND USE MIDDLEWARES
// INTIALIZE BASE PATH FOR ROUTER
// ADD ERROR HANDLING
// EXPORT MODULE
