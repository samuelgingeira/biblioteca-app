async function getLogs() {

  const res = await fetch(
    "http://localhost:3000/api/logs",
    {
      cache: "no-store",
    }
  );

  return res.json();

}


export default async function LogsPage() {

  const logs = await getLogs();

  return (

    <div className="container py-5">

      <div className="mb-5">

        <h1 className="display-5 fw-bold">
           Logs MongoDB
        </h1>

        <p className="text-muted">
          Historial de acciones del sistema
        </p>

      </div>


      <div className="row g-4">

        {logs.map((log) => (

          <div
            key={log._id}
            className="col-md-6 col-lg-4"
          >

            <div className="card shadow-sm border-0 h-100">

              <div className="card-body d-flex flex-column">

                <h4 className="fw-bold">
                  {log.accion}
                </h4>

                <p className="text-muted">
                  {log.descripcion}
                </p>


                <div className="mb-3">

                  <span className="badge bg-primary me-2">
                    {log.estado}
                  </span>

                  <span className="badge bg-dark">
                    {log.prioridad}
                  </span>

                </div>


                <p className="small text-muted">

                  Prestamo ID:
                  {" "}
                  {log.id_prestamo_mysql}

                </p>


                <p className="small text-muted mt-auto">

                  {new Date(
                    log.fecha_creacion
                  ).toLocaleDateString()}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}