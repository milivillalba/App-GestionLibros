import { AuthorModel } from "../models/author.js";

//crearAuthor
export const CtrlCreateAuthor = async (req, res) => {
  const { name, surname, biografia } = req.body;
  try {
    const newAuthor = new AuthorModel({ name, surname, biografia });
    await newAuthor.save();

    res.status(201).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "no se pudo crear al author" });
  }
};

//listar todo los authores

export const CtrlGetAllAuthores = async (req, res) => {
  try {
    const AllAuthores = await AuthorModel.find();

    res.status(200).json(AllAuthores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se encontraron Authores" });
  }
};

//Traer un autor por su id
export const CtrlGetAuthorId = async (req, res) => {
  const AuthorId = req.params.id;

  try {
    const Author = await AuthorModel.findById(AuthorId);

    if (!Author) {
      return res.sendStatus(403);
    }

    res.status(200).json(Author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo traer al Author" });
  }
};

//Editar al Author

export const CtrlUpdateAuthor = async (res, req) => {
  const AuthorId = req.params.id;
  const { name, surname, biografia } = req.body;

  try {
    await AuthorModel.findByIdAndUpdate(AuthorId, { name, surname, biografia });
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo editar correctamente" });
  }
};

//eliminar al author

export const CtrlDeleteAuthor = async (res, req) => {
  const AuthorId = req.params.id;
  try {
    await AuthorModel.findByIdAndDelete(AuthorId);
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo eliminar correctamente" });
  }
};
