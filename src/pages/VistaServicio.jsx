import { useLocation, useNavigate } from "react-router-dom";
import Encabezado from "../componets/Encabezado";
import "./VistaServicio.css";

const VistaServicio = () => {
  const location = useLocation();
  const servicio =
    location.state || JSON.parse(localStorage.getItem("servicio"));
  const navigate = useNavigate();
  return (
    <main>
      <Encabezado titulo="Servicio" />
      <div className="contenedorInformacion">
        <section className="contenedorImagenServicio">
          <h2>{servicio.nombre}</h2>
          <img
            src={servicio.imagen}
            alt={`Foto de perfil de ${servicio.nombre}`}
          />
        </section>
        <section className="contenedorInfoPrincipal">
          <h2>Información principal</h2>
          <p>{servicio.info}</p>
        </section>
      </div>
      <div className="contenedor-boton-clientes">
        <button
          type="button"
          onClick={() => navigate("/listaUsuario")}
          className="btn"
        >
          Lista Usuarios
        </button>
          <button
            type="button"
            onClick={() => navigate("/listaServicio")}
            className="btn"
          >
            Lista servicios
          </button>
      </div>
    </main>
  );
};

export default VistaServicio;
