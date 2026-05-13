import { DataTypes } from "sequelize";
import sequelize from "@/lib/mysql";

const Categoria = sequelize.define(
  "categorias",
  {
    id_categoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Categoria;