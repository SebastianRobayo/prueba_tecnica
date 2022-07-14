import { useState, useEffect } from "react";
import axios from "axios";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeCliente() {
  const [data, setData] = useState([]);
  const [compra, setCompra] = useState(false);

  const search = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/productos/search`);
      console.log(res.data.searchProductos);
      setData(res.data.searchProductos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="navbar bg-accent">
        <a className="btn btn-ghost normal-case text-xl">
          Inventarios | Cliente
        </a>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/home/cliente">Productos</Link>
            </li>
            <li>
              <Link to="/home/cliente/historial">Historial</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-x-4 min-h-[80vh]">
        <div className="col-span-3 flex justify-center items-center">
          <div class="overflow-x-auto">
            <table class="table table-auto w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad disponible</th>
                  <th>Añadir al carrito</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th>{item.id}</th>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.cantidad_disponible}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-ghost btn-square shadow-md"
                        onClick={() => {
                          setCompra(true);
                        }}
                      >
                        <FaCartPlus className="text-primary text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center m-4">
          {compra && (
            <div className="card w-96 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Carrito de compra</h2>
                <h4>Nombre productos</h4>
                <h5>$ 69000 - 1 unidad</h5>
                <h5>
                  `${} das${}`
                </h5>
                {/* <div class="overflow-x-auto">
                  <table class="table table-compact w-full">
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-ghost btn-circle mx-0.5"
                            onClick={() => {
                              setCompra(true);
                            }}
                          >
                            <FaTrashAlt className="text-primary" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                <div className="card-actions justify-end">
                  <button className="btn">Comprar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
