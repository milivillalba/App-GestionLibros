import { model, Schema, Types } from "mongoose";

const Books = new Schema(
  {
    title: {
      type: String,
    },
    genero: {
      type: String,
    },
    year: {
      type: Date,
    },
    converImage: {
      type: String,
      required: true,
    },
    authorId: {
      type: Types.ObjectId,
      ref: "Author",
    },
  },
  {
    timestamps: true, //genera los campos createdAt y updatedAt
    versionKey: false, //para que no se cree el campo --v
  }
);
export const BooksModel = model("Books", Books);
