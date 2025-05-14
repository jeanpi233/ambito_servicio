import { useNavigate } from "react-router-dom";
import Encabezado from "../componets/Encabezado";
import TarjetaServicio from "../componets/TarjetaServicio";
import "./ListaServicio.css";
import { servicios } from "../services/database";

const ListaServicio = () => {
  const navigate = useNavigate();

  return (
    <>
      <Encabezado titulo="Listado de servicios ofrecidos" />
        <div className="contenedorLista">
          {servicios.map((servicio) => (
            <TarjetaServicio key={servicio.id} datos={servicio} />
          ))}
        </div>
      <div className="contenedor-boton-inicio">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btnEncabezado"
        >
          Inicio
        </button>
      </div>
    </>
  );
};

export default ListaServicio;
