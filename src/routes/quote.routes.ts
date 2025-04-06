import { Router } from "express";
import {  } from "../controllers";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const quoteRouter = Router();

quoteRouter.get("/generate", ClerkExpressRequireAuth(), );


export default quoteRouter;
