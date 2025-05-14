import Encabezado from "../componets/Encabezado";
import './VistaFinal.css';
import { useNavigate, useLocation } from "react-router-dom";

const VistaFinal = () => {
  const location = useLocation();
  const { nombre, imagen } = location.state || { nombre: "Usuario desconocido", imagen: "/default.jpg" };  // Usamos una imagen por defecto
  let navigate = useNavigate();

  return (
    <main>
      <Encabezado titulo="Usuario" />

      <div className="contenedorFinal">
        {/* Sección izquierda: Nombre + imagen */}
        <section className="perfil_usuario_final">
          <h2>{nombre}</h2>
          <div className="imagenContenedor_final">
            <img src= {imagen} alt={`Foto de perfil de ${nombre}`} className="imagen_vistafinal" />
          </div>
        </section>

        {/* Sección derecha: Texto final */}
        <section className="informacion_usuario_final">
          <h2>¡Has llegado a la vista Usuario!</h2>
          <p>Contenido final de la página</p>
        </section>
      </div>

      {/* Botón de navegación */}
      <div className="contenedor-boton-clientes">
        <button type="button" onClick={() => navigate("/listaServicio")} className="btn">
          Lista Servicio
        </button>
      </div>
    </main>
  );
};

export default VistaFinal;
