import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

// LOCAL ONDE CHAMA O MIDDLEWARE QUE RETORNA A MENSAGEM: {"message":"Invalid token"} - MATHEUS
transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transactions",
  validationSchemaMiddleware(CreateTransaction),
  transactionController.create
);

transactionRouter.get("/transactions", transactionController.findAllByUser);

export default transactionRouter;
