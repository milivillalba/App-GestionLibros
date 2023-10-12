import { BooksModel } from "../models/blook.js";

//Control para crear un libro

export const CtrlCreateNewBlook = async (req, res) => {
  const { title, genero, year, authorId } = req.body;

  try {
    const file = req.files.filename;
    const newBlook = new BooksModel({
      title,
      genero,
      year,
      converImage: file.name,
      authorId,
    });

    await newBlook.save();

    let path = `src/Archivos/${file.name}`; //la variable path contiene una cadena de texto, esa cadena es una ruta de archivo que compone "src/Archivo" y el nombre del archivo( osea de la imagen )"file.name"
    file.mv(path, (err) => {
      //la funcion mv se utiliza para mover el archivo al destino que especifique
      if (err) {
        return res.status(500).send(err);
      }
    });

    res.status(201).json("Se creo el libro correctamente", newBlook);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
};

//listar doto los Libros

export const CtrlGetAllBlooks = async (req, res) => {
  try {
    const AllBlookAuthor = await BooksModel.find().populate("authorId", {});

    res.status(200).json(AllBlookAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error interno del servidor" });
  }
};

//Agrupar los libros por su genero

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
    res.status(500).json({ message: "eero del servidor " });
  }
};

//Editar al libro

export const CtrlUpdateBlook = async (req, res) => {
  const BlookId = req.params.id;
  const { title, genero, year, converImage, authorId } = req.body;

  try {
    await BooksModel.findByIdAndUpdate(BlookId, {
      title,
      genero,
      year,
      converImage,
      authorId,
    });
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo editar correctamente" });
  }
};

//eliminar al Libro

export const CtrlDeleteBlook = async (req, res) => {
  const BlookId = req.params.id;
  try {
    await BooksModel.findByIdAndDelete(BlookId);
    res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se pudo eliminar correctamente" });
  }
};
