"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";


export default function NuevoUsuarioPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
  });


  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await fetch("/api/usuarios", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      alert("Usuario creado");

      router.push("/usuarios");

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
                 Nuevo Usuario
              </h1>


              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Nombre
                  </label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        nombre: e.target.value,
                      })
                    }
                  />

                </div>


                <div className="mb-4">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    className="form-control"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />

                </div>


                <button
                  className="btn btn-dark w-100"
                  type="submit"
                >
                  Crear Usuario
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}