import { NextResponse } from "next/server";

import sequelize from "@/lib/mysql";

import Usuario from "@/models/Usuario";


export async function GET() {

  try {

    await sequelize.authenticate();

    const usuarios = await Usuario.findAll();

    return NextResponse.json(usuarios);

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

    const nuevoUsuario = await Usuario.create(body);

    return NextResponse.json(nuevoUsuario);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}