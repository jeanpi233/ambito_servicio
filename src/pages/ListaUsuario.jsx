import TarjetaUsuario from "../componets/TarjetasUsuario";
import Encabezado from "../componets/Encabezado";
import './ListaUsuario.css';
import { useNavigate } from "react-router-dom";

const ListaUsuario = () => {
  const navigate = useNavigate();

  const manejarVer = (nombre) => {
    const imagenes = {
      Cristian: "/public/imagenes/cristian.jpg",
      Lucas: "/lucas.jpg",
      Emanuel: "/public/imagenes/emanuel.jpg",
      Mateo: "/public/imagenes/mateo.jpg"
    };

    navigate("/vistaFinal", { state: { nombre, imagen: imagenes[nombre] } });
  };

  return (
    <>
      <Encabezado titulo="Lista de usuarios" />
      
      <div className="contenedor_Usuario">
        <TarjetaUsuario nombre="Cristian" imagen="/public/imagenes/cristian.jpg" onVer={() => manejarVer("Cristian")} />
        <TarjetaUsuario nombre="Lucas" imagen= "/public/imagenes/Lucas.jfif" onVer={() => manejarVer("Lucas")} />
        <TarjetaUsuario nombre="Emanuel" imagen="/public/imagenes/emanuel.jpg" onVer={() => manejarVer("Emanuel")} />
        <TarjetaUsuario nombre="Mateo" imagen="/public/imagenes/mateo.jpg" onVer={() => manejarVer("Mateo")} />
      </div>
      
      <div className="contenedor-boton-inicio">
        <button 
          type="button" onClick={() => navigate("/listaServicio")} className="btnEncabezado">
          volver
        </button>
      </div>
    </>
  );
};

export default ListaUsuario;
