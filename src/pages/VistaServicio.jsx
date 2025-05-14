import { useLocation, useNavigate } from "react-router-dom";
import Encabezado from "../componets/Encabezado";
import './VistaServicio.css';

const VistaServicio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nombre, imagen } = location.state || { nombre: "Servicio desconocido", imagen: "" };

  return (
    <main>
      <Encabezado titulo="Servicio" />
      <div className="contenedorInformacion">
        <section>
          <h2>{nombre}</h2>
          <div className="imagenContenedor">
            {imagen && <img src={imagen} alt={nombre} className="imagenServicio" />}
          </div>
        </section>
        <section>
          <h2>Información principal</h2>
          <p>
            Aquí puedes describir los detalles del servicio de <strong>{nombre}</strong>.
            Por ejemplo, tiempo estimado, costos, y otros detalles que el cliente necesita saber.
          </p>
        </section>
      </div>
      <div className="contenedor-boton-clientes">
        <button type="button"onClick={() => navigate("/listaUsuario")} className="btn">
          Lista Usuarios
        </button>
      </div>
    </main>
  );
};

export default VistaServicio;
