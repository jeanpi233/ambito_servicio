import { useNavigate } from "react-router-dom";
import Encabezado from "../componets/Encabezado";
import TarjetaServicio from "../componets/TarjetaServicio";
import './ListaServicio.css';

const ListaServicio = () => {
  const navigate = useNavigate();

  const manejarVerMas = (nombre) => {
    const imagenes = {
      Plomería: "/public/imagenes/plomeria.jpg",
      Electricidad: "/public/imagenes/electricidad.jpg",
      DiseñoGráfico: "/public/imagenes/diseño grafico.jpg",
      Carpintería: "/public/imagenes/carpinteria.jpg"
    };

    navigate("/vistaServicio", { state: { nombre, imagen: imagenes[nombre] } });
  };

  return (
    <>
      <Encabezado titulo="Listado de servicios ofrecidos" />
      <div className="contenedor_Servicio">
       <TarjetaServicio nombre="Plomería" imagen="/public/imagenes/plomeria.jpg" onVerMas={() => manejarVerMas("Plomería")} />
        <TarjetaServicio nombre="Electricidad" imagen="/public/imagenes/electricidad.jpg" onVerMas={() => manejarVerMas("Electricidad")} />
        <TarjetaServicio nombre="Diseño Gráfico" imagen="/public/imagenes/diseño grafico.jpg" onVerMas={() => manejarVerMas("Diseño Gráfico")} />
        <TarjetaServicio nombre="Carpintería" imagen="/public/imagenes/carpinteria.jpg" onVerMas={() => manejarVerMas("Carpintería")} />
      </div>
      <div className="contenedor-boton-inicio">
        <button type="button" onClick={() => navigate("/")} className="btnEncabezado">
          Inicio
        </button>
      </div>
    </>
  );
};

export default ListaServicio;
