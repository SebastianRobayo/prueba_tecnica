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
        usuario,
        contrasena,
      });
      Swal.fire(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-l from-primary to-secondary min-w-screen min-h-screen bg-opacity-60">
        <div className="container px-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-40 md: justify-center items-center min-h-screen gap-x-0">
            <div className="relative">
              <div className="card glass hover:shadow-2xl w-full  shadow-2xl mx-auto lg:ml-5">
                <div className="card-title">
                  <h3 className="text-2xl my-3 mx-auto text-center text-primary-content">
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
      </div>
    </>
  );
}
