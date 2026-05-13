import Link from "next/link";

import PrestamosList from "@/components/PrestamosList";


async function getPrestamos() {

  const res = await fetch(
    "http://localhost:3000/api/prestamos",
    {
      cache: "no-store",
    }
  );

  return res.json();

}


export default async function PrestamosPage() {

  const prestamos = await getPrestamos();

  return (

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-5">

        <div>

          <h1 className="display-5 fw-bold">
             Prestamos
          </h1>

          <p className="text-muted">
            Gestión de préstamos
          </p>

        </div>


        <Link
          href="/prestamos/nuevo"
          className="btn btn-dark"
        >
          + Nuevo Prestamo
        </Link>

      </div>


      <PrestamosList prestamos={prestamos} />

    </div>

  );

}