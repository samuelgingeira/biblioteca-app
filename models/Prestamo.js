import { DataTypes } from "sequelize";

import sequelize from "@/lib/mysql";

import Usuario from "./Usuario";

import Libro from "./Libro";


const Prestamo = sequelize.define(
  "prestamos",
  {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    id_usuario: {
      type: DataTypes.INTEGER,
    },

    id_libro: {
      type: DataTypes.INTEGER,
    },

    fecha_prestamo: {
      type: DataTypes.DATEONLY,
    },

    fecha_devolucion: {
      type: DataTypes.DATEONLY,
    },

  },
  {
    timestamps: false,
  }
);


// RELACIONES

Prestamo.belongsTo(Usuario, {
  foreignKey: "id_usuario",
  as: "usuario",
});

Prestamo.belongsTo(Libro, {
  foreignKey: "id_libro",
  as: "libro",
});


export default Prestamo;