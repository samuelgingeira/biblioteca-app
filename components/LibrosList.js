"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { useState } from "react";


export default function LibrosList({ libros }) {

  const router = useRouter();

  const [busqueda, setBusqueda] = useState("");

  const [categoria, setCategoria] = useState("");

  const [disponible, setDisponible] = useState("");


  async function borrarLibro(id) {

    const confirmar = confirm(
      "¿Seguro que quieres borrar este libro?"
    );

    if (!confirmar) return;

    try {

      await fetch(`/api/libros/${id}`, {
        method: "DELETE",
      });

      router.refresh();

    } catch (error) {

      alert("Error al borrar");

    }

  }


  const librosFiltrados = libros.filter((libro) => {

    const coincideBusqueda =
      libro.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "" ||
      libro.categoria?.nombre === categoria;

    const coincideDisponible =
      disponible === "" ||
      String(libro.disponible) === disponible;

    return (
      coincideBusqueda &&
      coincideCategoria &&
      coincideDisponible
    );

  });


  return (

    <div>

      <div className="card shadow border-0 mb-4">

        <div className="card-body">

          <div className="row g-3">

            <div className="col-md-4">

              <input
                type="text"
                placeholder="Buscar libro..."
                className="form-control"
                value={busqueda}
                onChange={(e) =>
                  setBusqueda(e.target.value)
                }
              />

            </div>


            <div className="col-md-4">

              <select
                className="form-select"
                value={categoria}
                onChange={(e) =>
                  setCategoria(e.target.value)
                }
              >

                <option value="">
                  Todas categorías
                </option>

                <option value="Novela">
                  Novela
                </option>

                <option value="Tecnologia">
                  Tecnología
                </option>

                <option value="Historia">
                  Historia
                </option>

              </select>

            </div>


            <div className="col-md-4">

              <select
                className="form-select"
                value={disponible}
                onChange={(e) =>
                  setDisponible(e.target.value)
                }
              >

                <option value="">
                  Todos
                </option>

                <option value="true">
                  Disponibles
                </option>

                <option value="false">
                  No disponibles
                </option>

              </select>

            </div>

          </div>

        </div>

      </div>


      <div className="row g-4">

        {librosFiltrados.map((libro) => (

          <div
            key={libro.id_libro}
            className="col-md-6 col-lg-4"
          >

            <div className="card shadow-sm border-0 h-100">

              <div className="card-body d-flex flex-column">

                <h4 className="card-title fw-bold">
                  {libro.titulo}
                </h4>

                <p className="text-muted mb-2">
                  {libro.autor}
                </p>

                <p>
                  <strong>Categoría:</strong>
                  {" "}
                  {libro.categoria?.nombre}
                </p>

                <p>

                  <strong>Disponible:</strong>
                  {" "}

                  {libro.disponible
                    ? " Sí"
                    : " No"}

                </p>


                <div className="mt-auto d-flex gap-2">

                  <Link
                    href={`/libros/editar/${libro.id_libro}`}
                    className="btn btn-primary"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() =>
                      borrarLibro(libro.id_libro)
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

    </div>

  );

}