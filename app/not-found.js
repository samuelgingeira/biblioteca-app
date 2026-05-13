import Link from "next/link";


export default function NotFound() {

  return (

    <div className="p-10 text-center">

      <h1 className="text-5xl font-bold mb-4">
        404
      </h1>

      <p className="text-xl mb-6">
        Página no encontrada
      </p>

      <Link
        href="/"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Volver al inicio
      </Link>

    </div>

  );

}