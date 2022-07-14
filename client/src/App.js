import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeAdmin from "./pages/HomeAdmin";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/administrador" element={<HomeAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
