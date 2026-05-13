"use client";

export default function Error({
  error,
  reset,
}) {

  return (

    <div className="p-10 text-center">

      <h1 className="text-4xl font-bold mb-4">
        Ha ocurrido un error
      </h1>

      <p className="mb-6">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Reintentar
      </button>

    </div>

  );

}