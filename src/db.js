import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config("./env");

export const conectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/gestiondb");
    console.log("Conexion Exitosa a la Base de Datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos");
  }
};
