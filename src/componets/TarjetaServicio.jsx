import { useNavigate } from "react-router-dom";
const TarjetaServicio = ({ datos }) => {
  let redireccion = useNavigate();
  return (
    <div className="tarjeta_Servicio">
      <h3>{datos.nombre}</h3>
      <div className="imagen_contenedor_servicio">
        <img src={datos.imagen} alt={datos.nombre} className="imagen_ajustada_servicio" />
      </div>
      <button type="button" className="btn" onClick={() => redireccion(`/vistaServicio/${datos.id}`, { state: datos })}>
        Ver más
      </button>
    </div>
  );
};

export default TarjetaServicio;
