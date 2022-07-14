import { useState, useEffect } from "react";
import axios from "axios";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeClienteHis() {
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
        <div class="flex justify-between w-full">
          <ul class="menu menu-horizontal p-0 flex">
            <li>
              <Link to="/home/cliente">Productos</Link>
            </li>
            <li>
              <Link to="/home/cliente/historial">Historial</Link>
            </li>
          </ul>
          <div class="dropdown dropdown-end mr-0">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-door-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-center my-10">Historial de compras</h1>
      <div className="grid grid-cols-3 gap-x-4 min-h-[80vh]">
        <div className="col-span-3 flex justify-center items-start">
          <div class="overflow-x-auto">
            <table class="table table-auto w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Fecha de la compra</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
