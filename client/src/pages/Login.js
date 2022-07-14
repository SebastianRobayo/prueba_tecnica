import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const login = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(`http://localhost:5000/login`, {
        usuario: usuario,
        contrasena: contrasena,
      });
      Swal.fire(res.data.message);

      window.location.href = "/home/cliente";
      window.location.href = "/home/administrador";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-base-100 min-w-screen min-h-screen">
        <div className="container px-10 mx-auto">
          <div className="flex justify-center items-center min-h-screen gap-x-0">
            <div className="card w-96 shadow-2xl mx-auto bg-accent">
              <div className="card-title">
                <h3 className="text-2xl my-3 mx-auto text-center text-neutral">
                  Inicio de sesión
                </h3>
              </div>
              <form onSubmit={login}>
                <div className="card-body">
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="input glass shadow-lg w-full"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    // required
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="input glass shadow-lg w-full"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    // required
                  />
                  <div className="card-actions justify-center">
                    <button
                      type="submit"
                      className="btn btn-neutral btn-outline glass shadow-lg"
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
