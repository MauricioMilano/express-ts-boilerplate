import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {IdentityProviderRoutes} from "./src/routes/identityProvider"

// Loading enviroment variables from .env file.
dotenv.config();

// Setting the application port
const port = process.env.PORT || 3000;

// Express Instance
const app: Express = express();

// Using this two rows to express accepts JSON format. 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Registering routes, on Express. 
app.use("/identity",IdentityProviderRoutes.getRoutes())

//Running Server 
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});