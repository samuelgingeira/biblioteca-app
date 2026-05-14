import Link from "next/link";

import LibrosList from "@/components/LibrosList";


async function getLibros() {

  const res = await fetch(
    "/api/libros",
    {
      cache: "no-store",
    }
  );

  return res.json();
}


export default async function LibrosPage() {

  const libros = await getLibros();

  return (

    <div className="p-10">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Libros
        </h1>

        <Link
          href="/libros/nuevo"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Nuevo Libro
        </Link>

      </div>

      <LibrosList libros={libros} />

    </div>

  );

}