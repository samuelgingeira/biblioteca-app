import Link from "next/link";

import UsuariosList from "@/components/UsuariosList";


async function getUsuarios() {

  const res = await fetch(
    "/api/usuarios",
    {
      cache: "no-store",
    }
  );

  return res.json();

}


export default async function UsuariosPage() {

  const usuarios = await getUsuarios();

  return (

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-5">

        <div>

          <h1 className="display-5 fw-bold">
             Usuarios
          </h1>

          <p className="text-muted">
            Gestión de usuarios
          </p>

        </div>


        <Link
          href="/usuarios/nuevo"
          className="btn btn-dark"
        >
          + Nuevo Usuario
        </Link>

      </div>


      <UsuariosList usuarios={usuarios} />

    </div>

  );

}