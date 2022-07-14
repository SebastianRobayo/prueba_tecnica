import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function HomeAdmin() {
  const [numero_de_lote, setNumero_de_lote] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad_disponible, setCantidad_disponible] = useState("");
  const [fecha_de_ingreso, setFecha_de_ingreso] = useState("");
  const [data, setData] = useState([]);
  const [edicion, setEdicion] = useState(false);

  const submit = async (e) => {
    try {
      e.preventDefault();
      if (!edicion) {
        await axios.post(`http://localhost:5000/productos/create`, {
          numero_de_lote: numero_de_lote,
          nombre: nombre,
          precio: precio,
          cantidad_disponible: cantidad_disponible,
          fecha_de_ingreso: fecha_de_ingreso,
        });
      } else {
        await axios.put(
          `http://localhost:5000/productos/update/${data[0].id}`,
          {
            numero_de_lote: numero_de_lote,
            nombre: nombre,
            precio: precio,
            cantidad_disponible: cantidad_disponible,
            fecha_de_ingreso: fecha_de_ingreso,
          }
        );
        console.log(data[0].id);
      }
      search();
      clear();
      setEdicion(false);
    } catch (error) {
      console.log(error);
    }
  };

  const search = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/productos/search`);
      console.log(res.data.searchProductos);
      setData(res.data.searchProductos);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProducto = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/productos/delete/${data[0].id}`
      );
      search();
    } catch (error) {
      console.log(error);
    }
  };

  const view = (e) => {
    setNumero_de_lote(e.numero_de_lote);
    setNombre(e.nombre);
    setPrecio(e.precio);
    setCantidad_disponible(e.cantidad_disponible);
    setFecha_de_ingreso(e.fecha_de_ingreso);
  };

  const clear = () => {
    setNumero_de_lote("");
    setNombre("");
    setPrecio("");
    setCantidad_disponible("");
    setFecha_de_ingreso("");
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="navbar bg-accent">
        <a className="btn btn-ghost normal-case text-xl">
          Inventarios | Administrador
        </a>
      </div>
      <div className="grid grid-cols-8 min-h-[80vh]">
        <div className="col-span-3 flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-2xl">
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
                  {edicion ? (
                    <button type="submit" className="btn btn-secondary">
                      Actualizar
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary">
                      Ingresar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-5 mx-2">
          <div class="overflow-x-auto">
            <table class="table w-full my-10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Número de lote</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad disponible</th>
                  <th>Fecha de ingreso</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th>{item.id}</th>
                    <td>{item.numero_de_lote}</td>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.cantidad_disponible}</td>
                    <td>{item.fecha_de_ingreso}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-ghost btn-square shadow-md"
                        onClick={() => {
                          view(item);
                          setEdicion(true);
                          console.log(item.id);
                        }}
                      >
                        <FaEdit className="text-secondary text-2xl" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-square shadow-md"
                        onClick={() => deleteProducto()}
                      >
                        <FaTrashAlt className="text-neutral text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
