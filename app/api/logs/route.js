import { NextResponse } from "next/server";

import connectMongo from "@/lib/mongodb";

import LogPrestamo from "@/models/LogPrestamo";


export async function GET() {

  try {

    await connectMongo();

    const logs = await LogPrestamo.find();

    return NextResponse.json(logs);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}

export async function POST(request) {

  try {

    await connectMongo();

    const body = await request.json();

    const nuevoLog = await LogPrestamo.create(body);

    return NextResponse.json(nuevoLog);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );

  }

}