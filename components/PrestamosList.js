"use client";

import { useRouter } from "next/navigation";


export default function PrestamosList({
  prestamos,
}) {

  const router = useRouter();


  async function borrarPrestamo(id) {

    const confirmar = confirm(
      "¿Seguro que quieres borrar este préstamo?"
    );

    if (!confirmar) return;

    try {

      await fetch(`/api/prestamos/${id}`, {
        method: "DELETE",
      });

      router.refresh();

    } catch (error) {

      alert("Error al borrar");

    }

  }


  return (

    <div className="row g-4">

      {prestamos.map((prestamo) => (

        <div
          key={prestamo.id}
          className="col-md-6 col-lg-4"
        >

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body d-flex flex-column">

              <h4 className="fw-bold">
                 {prestamo.usuario?.nombre}
              </h4>

              <p className="text-muted">
                 {prestamo.libro?.titulo}
              </p>

              <p>
                <strong>Fecha préstamo:</strong>
                {" "}
                {prestamo.fecha_prestamo}
              </p>

              <div className="mt-auto">

                <button
                  onClick={() =>
                    borrarPrestamo(prestamo.id)
                  }
                  className="btn btn-danger w-100"
                >
                  Borrar Prestamo
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}