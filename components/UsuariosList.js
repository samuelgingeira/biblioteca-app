"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";


export default function UsuariosList({
  usuarios,
}) {

  const router = useRouter();


  async function borrarUsuario(id) {

    const confirmar = confirm(
      "¿Seguro que quieres borrar este usuario?"
    );

    if (!confirmar) return;

    try {

      await fetch(`/api/usuarios/${id}`, {
        method: "DELETE",
      });

      router.refresh();

    } catch (error) {

      alert("Error al borrar");

    }

  }


  return (

    <div className="row g-4">

      {usuarios.map((usuario) => (

        <div
          key={usuario.id_usuario}
          className="col-md-6 col-lg-4"
        >

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body d-flex flex-column">

              <h4 className="fw-bold">
                {usuario.nombre}
              </h4>

              <p className="text-muted">
                {usuario.email}
              </p>


              <div className="mt-auto d-flex gap-2">

                <Link
                  href={`/usuarios/editar/${usuario.id_usuario}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>

                <Link
                  href={`/usuarios/${usuario.id_usuario}`}
                  className="btn btn-outline-dark"
                >
                  Ver
                </Link>

                <button
                  onClick={() =>
                    borrarUsuario(
                      usuario.id_usuario
                    )
                  }
                  className="btn btn-danger"
                >
                  Borrar
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}