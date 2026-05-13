import Prestamo from "@/models/Prestamo";

import Usuario from "@/models/Usuario";

import Libro from "@/models/Libro";


async function getUsuario(id) {

  const usuario = await Usuario.findByPk(id);

  return JSON.parse(JSON.stringify(usuario));

}


async function getPrestamos(id) {

  const prestamos = await Prestamo.findAll({

    where: {
      id_usuario: id,
    },

    include: [
      {
        model: Libro,
        as: "libro",
      },
    ],

  });

  return JSON.parse(JSON.stringify(prestamos));

}


export default async function UsuarioDetallePage({
  params,
}) {

  const { id } = await params;

  const usuario = await getUsuario(id);

  const prestamos = await getPrestamos(id);


  return (

    <div className="container py-5">

      <div className="card shadow border-0 mb-5">

        <div className="card-body">

          <h1 className="display-5 fw-bold">
             {usuario.nombre}
          </h1>

          <p className="text-muted">
            {usuario.email}
          </p>

        </div>

      </div>


      <h2 className="fw-bold mb-4">
         Libros Prestados
      </h2>


      {prestamos.length === 0 ? (

        <div className="alert alert-secondary">

          Este usuario no tiene préstamos activos.

        </div>

      ) : (

        <div className="row g-4">

          {prestamos.map((prestamo) => (

            <div
              key={prestamo.id}
              className="col-md-6 col-lg-4"
            >

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body">

                  <h4 className="fw-bold">
                    {prestamo.libro?.titulo}
                  </h4>

                  <p className="text-muted">
                    {prestamo.libro?.autor}
                  </p>

                  <p>
                    <strong>Fecha:</strong>
                    {" "}
                    {prestamo.fecha_prestamo}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}