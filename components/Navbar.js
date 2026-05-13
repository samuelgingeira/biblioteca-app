import Link from "next/link";


export default function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <Link
          href="/"
          className="navbar-brand fw-bold"
        >
           Biblioteca App
        </Link>

        <div className="navbar-nav d-flex flex-row gap-3">

          <Link
            href="/"
            className="nav-link"
          >
            Dashboard
          </Link>

          <Link
            href="/libros"
            className="nav-link"
          >
            Libros
          </Link>

          <Link
            href="/usuarios"
            className="nav-link"
          >
            Usuarios
          </Link>

          <Link
            href="/prestamos"
            className="nav-link"
          >
            Prestamos
          </Link>

          <Link
            href="/logs"
            className="nav-link"
          >
            Logs
          </Link>

        </div>

      </div>

    </nav>

  );

}