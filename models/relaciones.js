import Categoria from "./Categoria";
import Libro from "./Libro";
import Usuario from "./Usuario";
import Prestamo from "./Prestamo";

Categoria.hasMany(Libro, {
  foreignKey: "id_categoria",
});

Libro.belongsTo(Categoria, {
  foreignKey: "id_categoria",
});

Usuario.hasMany(Prestamo, {
  foreignKey: "id_usuario",
});

Prestamo.belongsTo(Usuario, {
  foreignKey: "id_usuario",
});

Libro.hasMany(Prestamo, {
  foreignKey: "id_libro",
});

Prestamo.belongsTo(Libro, {
  foreignKey: "id_libro",
});