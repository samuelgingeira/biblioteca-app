"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";


export default function NuevoPrestamoPage() {

  const router = useRouter();

  const [usuarios, setUsuarios] = useState([]);

  const [libros, setLibros] = useState([]);

  const [form, setForm] = useState({
    id_usuario: "",
    id_libro: "",
    fecha_prestamo: "",
    fecha_devolucion: "",
  });


  useEffect(() => {

    async function cargarDatos() {

      const usuariosRes = await fetch("/api/usuarios");

      const usuariosData = await usuariosRes.json();

      setUsuarios(usuariosData);


      const librosRes = await fetch("/api/libros");

      const librosData = await librosRes.json();

        const librosDisponibles =
        librosData.filter(
            (libro) => libro.disponible
        );

        setLibros(librosDisponibles);
            }

    cargarDatos();

  }, []);


  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await fetch("/api/prestamos", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      alert("Prestamo creado");

      router.push("/prestamos");

      router.refresh();

    } catch (error) {

      alert("Error");

    }

  }


  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Nuevo Prestamo
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >

        <select
          required
          className="border p-2 rounded"
          value={form.id_usuario}
          onChange={(e) =>
            setForm({
              ...form,
              id_usuario: Number(e.target.value),
            })
          }
        >

          <option value="">
            Selecciona usuario
          </option>

          {usuarios.map((usuario) => (

            <option
              key={usuario.id_usuario}
              value={usuario.id_usuario}
            >

              {usuario.nombre}

            </option>

          ))}

        </select>


        <select
          required
          className="border p-2 rounded"
          value={form.id_libro}
          onChange={(e) =>
            setForm({
              ...form,
              id_libro: Number(e.target.value),
            })
          }
        >

          <option value="">
            Selecciona libro
          </option>

          {libros.map((libro) => (

            <option
              key={libro.id_libro}
              value={libro.id_libro}
            >

              {libro.titulo}

            </option>

          ))}

        </select>


        <div className="mb-3">

          <label className="form-label">
            Fecha préstamo
          </label>

          <input
            type="date"
            className="form-control"
            value={form.fecha_prestamo}
            onChange={(e) =>
              setForm({
                ...form,
                fecha_prestamo: e.target.value,
              })
            }
          />

        </div>


        <div className="mb-3">

          <label className="form-label">
            Fecha devolución
          </label>

          <input
            type="date"
            className="form-control"
            value={form.fecha_devolucion}
            onChange={(e) =>
              setForm({
                ...form,
                fecha_devolucion: e.target.value,
              })
            }
          />

        </div>


        <button
          className="bg-black text-white p-2 rounded"
        >
          Crear Prestamo
        </button>

      </form>

    </div>

  );

}