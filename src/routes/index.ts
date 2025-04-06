import { Router } from "express";
import { errorHandler, healthCheck, notFound } from "../controllers";
import walletRouter from "./wallet.routes";
// import clerkRouter from "./clerk.routes";
// import quoteRouter from "./quote.routes";

const router = Router();

router.get("/", healthCheck);

router.use("/wallet", walletRouter);
// router.use("/buyQuote",quoteRouter);

router.all("*", notFound);

router.use(errorHandler);

export default router;
