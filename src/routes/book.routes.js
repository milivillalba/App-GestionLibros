import { Router } from "express";
const routerBook = Router();
import {
  CtrlCreateNewBlook,
  CtrlGetAllBlooks,
  CtrlDeleteBlook,
  CtrlGetBlookId,
  CtrlUpdateBlook,
} from "../controllers/Blook.controller.js";

//traer todos los libros
routerBook.get("/", CtrlGetAllBlooks);

//agregar un libro

routerBook.post("/", CtrlCreateNewBlook);

//traer un solo libro por su id
routerBook.get("/:id", CtrlGetBlookId);

//editar el libro
routerBook.put("/:id", CtrlUpdateBlook);

//eliminar un libro
routerBook.delete("/:id", CtrlDeleteBlook);

export { routerBook };
