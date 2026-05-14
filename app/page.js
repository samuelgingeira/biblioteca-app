async function getLibros() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(
    `${baseUrl}/api/libros`,
    {
      cache: "no-store",
    }
  );

  return res.json();

}


async function getUsuarios() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(
    `${baseUrl}/api/usuarios`,
    {
      cache: "no-store",
    }
  );

  return res.json();

}


async function getLogs() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(
    `${baseUrl}/api/logs`,
    {
      cache: "no-store",
    }
  );

  return res.json();

}


async function getPrestamos() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(
    `${baseUrl}/api/prestamos`,
    {
      cache: "no-store",
    }
  );

  return res.json();

}


export default async function Home() {

  const libros = await getLibros();

  const usuarios = await getUsuarios();

  const logs = await getLogs();

  const prestamos = await getPrestamos();


  return (

    <div className="container py-5">

      <div className="mb-5">

        <h1 className="display-4 fw-bold">
          Dashboard Biblioteca
        </h1>

        <p className="text-muted">
          Panel de gestión del sistema
        </p>

      </div>


      <div className="row g-4">

        <div className="col-md-3">

          <div className="card shadow border-0 h-100">

            <div className="card-body">

              <h5 className="card-title">
                Libros
              </h5>

              <p className="display-5 fw-bold">
                {libros.length}
              </p>

            </div>

          </div>

        </div>


        <div className="col-md-3">

          <div className="card shadow border-0 h-100">

            <div className="card-body">

              <h5 className="card-title">
                Usuarios
              </h5>

              <p className="display-5 fw-bold">
                {usuarios.length}
              </p>

            </div>

          </div>

        </div>


        <div className="col-md-3">

          <div className="card shadow border-0 h-100">

            <div className="card-body">

              <h5 className="card-title">
                Prestamos
              </h5>

              <p className="display-5 fw-bold">
                {prestamos.length}
              </p>

            </div>

          </div>

        </div>


        <div className="col-md-3">

          <div className="card shadow border-0 h-100">

            <div className="card-body">

              <h5 className="card-title">
                Logs
              </h5>

              <p className="display-5 fw-bold">
                {logs.length}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}