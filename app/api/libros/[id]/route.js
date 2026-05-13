import { NextResponse } from "next/server";

import sequelize from "@/lib/mysql";

import Libro from "@/models/Libro";

import Prestamo from "@/models/Prestamo";


export async function GET(request, { params }) {

  try {

    await sequelize.authenticate();

    const { id } = await params;

    const libro = await Libro.findByPk(id);

    if (!libro) {

      return NextResponse.json(
        { error: "Libro no encontrado" },
        { status: 404 }
      );

    }

    return NextResponse.json(libro);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}


export async function PUT(request, { params }) {

  try {

    const { id } = await params;

    const body = await request.json();

    const libro = await Libro.findByPk(id);

    if (!libro) {

      return NextResponse.json(
        { error: "Libro no encontrado" },
        { status: 404 }
      );

    }

    await libro.update(body);

    return NextResponse.json(libro);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}



export async function DELETE(request, { params }) {

  try {

    const { id } = await params;

    const libro = await Libro.findByPk(id);

    if (!libro) {

      return NextResponse.json(
        { error: "Libro no encontrado" },
        { status: 404 }
      );

    }

    await Prestamo.destroy({
      where: {
        id_libro: id,
      },
    });

    await libro.destroy();

    return NextResponse.json({
      mensaje: "Libro eliminado",
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}