import express, { Express, Request, Response, NextFunction, Router } from "express";
import { Authenticate } from "../app/Authenticate";
import { IdentityProviderModel } from "../models/identityProviderModel";

var router: Router = express.Router();

export class IdentityProviderRoutes {
  static getRoutes(): Router {
    
    router.post("/login", function (req: Request, res: Response) {
      const body: IdentityProviderModel = req.body;
      try {
        const Token = Authenticate.login(body);
        res.send(Token);
      } catch (Error:any) {
        res.status(401).send(Error.message);
      }
    });

    return router;
  }
}

