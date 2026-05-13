import { NextResponse } from "next/server";

import sequelize from "@/lib/mysql";

import Prestamo from "@/models/Prestamo";
import Usuario from "@/models/Usuario";
import Libro from "@/models/Libro";
import LogPrestamo from "@/models/LogPrestamo";

import "@/models/relaciones";


export async function GET() {

  try {

    await sequelize.authenticate();

    const prestamos = await Prestamo.findAll({

      include: [
        Usuario,
        Libro,
      ],

    });

    return NextResponse.json(prestamos);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}


export async function POST(request) {

  try {

    const body = await request.json();

    const nuevoPrestamo = await Prestamo.create(body);
    await LogPrestamo.create({

        id_prestamo_mysql: nuevoPrestamo.id,

        accion: "prestamo creado",

        descripcion: `Se creó el préstamo del libro ID ${body.id_libro}`,

        prioridad: "media",

        estado: "abierto",

        metadatos: {
            usuario: body.id_usuario,
        },

        fecha_creacion: new Date(),

    });

    await Libro.update(
      {
        disponible: false,
      },
      {
        where: {
          id_libro: body.id_libro,
        },
      }
    );

    return NextResponse.json(nuevoPrestamo);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}