import "dotenv/config";
import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { conectDB } from "./db.js";
import { AuthorRouter } from "./routes/author.routes.js";
import { routerBook } from "./routes/book.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fieldSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "el Archivo es muy grande",
  })
);
app.use("/api/author", AuthorRouter);
app.use("/api/book", routerBook);

conectDB();
app.listen(3000);
console.log("Servidor iniciado en el Puerto", 3000);
