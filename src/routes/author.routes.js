import { Router } from "express";
import {
  CtrlCreateAuthor,
  CtrlGetAllAuthores,
  CtrlGetAuthorId,
  CtrlDeleteAuthor,
  CtrlUpdateAuthor,
} from "../controllers/Author.controller.js";

const AuthorRouter = Router();

//traer todo los authores
AuthorRouter.get("/", CtrlGetAllAuthores);
//trer un author por su id
AuthorRouter.get("/:id", CtrlGetAuthorId);

//agregar un author
AuthorRouter.post("/", CtrlCreateAuthor);

//editar al author
AuthorRouter.put("/:id", CtrlUpdateAuthor);

//eliminar al author
AuthorRouter.delete("/", CtrlDeleteAuthor);

export { AuthorRouter };
