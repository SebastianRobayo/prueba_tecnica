import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeAdmin from "./pages/HomeAdmin";
import HomeCliente from "./pages/HomeCliente";
import HomeClienteHis from "./pages/HomeClienteHis";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/administrador" element={<HomeAdmin />} />
          <Route path="/home/cliente" element={<HomeCliente />} />
          <Route path="/home/cliente/historial" element={<HomeClienteHis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
