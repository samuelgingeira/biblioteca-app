import { NextResponse } from "next/server";

import connectMongo from "@/lib/mongodb";

import LogPrestamo from "@/models/LogPrestamo";


// GET log por ID
export async function GET(request, { params }) {

  try {

    await connectMongo();

    const { id } = await params;

    const log = await LogPrestamo.findById(id);

    if (!log) {

      return NextResponse.json(
        { error: "Log no encontrado" },
        { status: 404 }
      );

    }

    return NextResponse.json(log);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}


// PUT actualizar log
export async function PUT(request, { params }) {

  try {

    await connectMongo();

    const { id } = await params;

    const body = await request.json();

    const logActualizado =
      await LogPrestamo.findByIdAndUpdate(
        id,
        body,
        { new: true }
      );

    return NextResponse.json(logActualizado);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}


// DELETE log
export async function DELETE(request, { params }) {

  try {

    await connectMongo();

    const { id } = await params;

    await LogPrestamo.findByIdAndDelete(id);

    return NextResponse.json({
      mensaje: "Log eliminado",
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}