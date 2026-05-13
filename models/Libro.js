import { DataTypes } from "sequelize";
import sequelize from "@/lib/mysql";

const Libro = sequelize.define(
  "libros",
  {
    id_libro: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id_categoria: {
      type: DataTypes.INTEGER,
    },

    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Libro;