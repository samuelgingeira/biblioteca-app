"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";


export default function NuevoLibroPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    titulo: "",
    autor: "",
    id_categoria: 1,
    disponible: true,
  });


  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const res = await fetch("/api/libros", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Error al crear libro");
      }

      alert("Libro creado");

      router.push("/libros");

    } catch (error) {

      alert(error.message);

    }

  }


  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h1 className="mb-4 fw-bold">
                 Nuevo Libro
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
                    value={form.titulo}
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
                    value={form.autor}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        autor: e.target.value,
                      })
                    }
                  />

                </div>


                <div className="mb-4">

                  <label className="form-label">
                    Categoría
                  </label>

                  <select
                    className="form-select"
                    value={form.id_categoria}
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


                <button
                  className="btn btn-dark w-100"
                  type="submit"
                >
                  Crear Libro
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}