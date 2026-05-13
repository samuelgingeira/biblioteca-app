import { NextResponse } from "next/server";

import sequelize from "@/lib/mysql";

import Libro from "@/models/Libro";
import Categoria from "@/models/Categoria";

import "@/models/relaciones";


export async function GET() {

  try {

    await sequelize.authenticate();

    const libros = await Libro.findAll({
      include: Categoria,
    });

    return NextResponse.json(libros);

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

    const nuevoLibro = await Libro.create(body);

    return NextResponse.json(nuevoLibro);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}