"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { use } from "react";


export default function EditarLibroPage({ params }) {

  const router = useRouter();

  const { id } = use(params);

  const [form, setForm] = useState({
    titulo: "",
    autor: "",
    id_categoria: 1,
    disponible: true,
  });


  useEffect(() => {

    async function cargarLibro() {

      const res = await fetch(
        `/api/libros/${id}`
      );

      const data = await res.json();

      setForm(data);

    }

    cargarLibro();

  }, [id]);


  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await fetch(`/api/libros/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      alert("Libro actualizado");

      router.push("/libros");

      router.refresh();

    } catch (error) {

      alert("Error");

    }

  }


  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h1 className="mb-4 fw-bold">
                 Editar Libro
              </h1>


              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Título
                  </label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={form.titulo || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        titulo: e.target.value,
                      })
                    }
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Autor
                  </label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={form.autor || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        autor: e.target.value,
                      })
                    }
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Categoría
                  </label>

                  <select
                    className="form-select"
                    value={form.id_categoria || 1}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        id_categoria: Number(e.target.value),
                      })
                    }
                  >

                    <option value={1}>
                      Novela
                    </option>

                    <option value={2}>
                      Tecnología
                    </option>

                    <option value={3}>
                      Historia
                    </option>

                  </select>

                </div>


                <div className="mb-4 form-check">

                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={form.disponible || false}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        disponible: e.target.checked,
                      })
                    }
                  />

                  <label className="form-check-label">
                    Disponible
                  </label>

                </div>


                <button
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Guardar Cambios
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}