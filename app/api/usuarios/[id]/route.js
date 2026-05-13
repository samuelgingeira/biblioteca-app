import { NextResponse } from "next/server";

import Usuario from "@/models/Usuario";


export async function GET(request, { params }) {

  try {

    const { id } = await params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );

    }

    return NextResponse.json(usuario);

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

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );

    }

    await usuario.update(body);

    return NextResponse.json(usuario);

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

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

      return NextResponse.json(
        {
          error: "Usuario no encontrado",
        },
        {
          status: 404,
        }
      );

    }

    await usuario.destroy();

    return NextResponse.json({
      mensaje: "Usuario eliminado",
    });

  } catch (error) {

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );

  }

}