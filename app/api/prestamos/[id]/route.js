import { NextResponse } from "next/server";

import Prestamo from "@/models/Prestamo";
import Libro from "@/models/Libro";

import LogPrestamo from "@/models/LogPrestamo";


// DELETE prestamo
export async function DELETE(request, { params }) {

  try {

    const { id } = await params;

    const prestamo = await Prestamo.findByPk(id);

    if (!prestamo) {

      return NextResponse.json(
        { error: "Prestamo no encontrado" },
        { status: 404 }
      );

    }

    // volver libro disponible
    await Libro.update(
      {
        disponible: true,
      },
      {
        where: {
          id_libro: prestamo.id_libro,
        },
      }
    );

    // crear log MongoDB
    await LogPrestamo.create({

      id_prestamo_mysql: prestamo.id,

      accion: "prestamo eliminado",

      descripcion: `Se eliminó el préstamo del libro ID ${prestamo.id_libro}`,

      prioridad: "baja",

      estado: "cerrado",

      metadatos: {
        libro: prestamo.id_libro,
      },

      fecha_creacion: new Date(),

    });

    // borrar prestamo
    await prestamo.destroy();

    return NextResponse.json({
      mensaje: "Prestamo eliminado",
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}