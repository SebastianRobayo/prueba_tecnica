import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function HomeAdmin() {
  const [numero_de_lote, setNumero_de_lote] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad_disponible, setCantidad_disponible] = useState("");
  const [fecha_de_ingreso, setFecha_de_ingreso] = useState("");

  const submit = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(`http://localhost:5000/productos/create`, {
        numero_de_lote: numero_de_lote,
        nombre: nombre,
        precio: precio,
        cantidad_disponible: cantidad_disponible,
        fecha_de_ingreso: fecha_de_ingreso,
      });
      Swal.fire(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="navbar bg-accent">
        <a className="btn btn-ghost normal-case text-xl">Inventarios</a>
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <form onSubmit={submit}>
                <h2 className="card-title justify-center">
                  Ingreso de productos
                </h2>
                <label className="label">Número de lote</label>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  value={numero_de_lote}
                  onChange={(e) => setNumero_de_lote(e.target.value)}
                />
                <label className="label">Nombre</label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <label className="label">Precio</label>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
                <label className="label">Cantidad disponible</label>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  value={cantidad_disponible}
                  onChange={(e) => setCantidad_disponible(e.target.value)}
                />
                <label className="label">Fecha de ingreso</label>

                <input
                  type="date"
                  className="input input-bordered w-full max-w-xs"
                  value={fecha_de_ingreso}
                  onChange={(e) => setFecha_de_ingreso(e.target.value)}
                />
                <div className="card-actions justify-center my-3">
                  <button type="submit" className="btn btn-primary">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Número de lote</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad disponible</th>
                  <th>Fecha de ingreso</th>
                  <th>Interacción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
