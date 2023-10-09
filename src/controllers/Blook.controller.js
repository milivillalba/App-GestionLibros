import { BooksModel } from "../models/blook.js";

//Control para crear un libro

export const CtrlCreateNewBlook = async (res, req) => {
  const { title, genero, year, authorId } = req.body;
  try {
    const newBlook = new BooksModel({ title, genero, year, authorId });

    await newBlook.save();

    res.status(201).json("Se creo el libro correctamente", newBlook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensage: "No se creo el libro " });
  }
};

//listar doto los Libros

export const CtrlGetAllBlooks = async (req, res) => {
  try {
    const AllBlook = await BooksModel.find();

    res.status(200).json(AllBlook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se encontraron Los Libros" });
  }
};

//Traer un Libro por su id
export const CtrlGetBlookId = async (req, res) => {
  const BlookId = req.params.id;

  try {
    const Blook = await BooksModel.findById(BlookId);

    if (!Blook) {
      return res.sendStatus(403);
    }

    res.status(200).json(Blook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo traer al Author" });
  }
};

//Editar al libro

export const CtrlUpdateBlook = async (res, req) => {
  const BlookId = req.params.id;
  const { title, genero, year, authorId } = req.body;

  try {
    await BooksModel.findByIdAndUpdate(BlookId, {
      title,
      genero,
      year,
      authorId,
    });
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo editar correctamente" });
  }
};

//eliminar al Libro

export const CtrlDeleteBlook = async (res, req) => {
  const BlookId = req.params.id;
  try {
    await BooksModel.findByIdAndDelete(BlookId);
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo eliminar correctamente" });
  }
};
