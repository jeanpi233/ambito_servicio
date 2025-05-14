const TarjetaServicio = ({ nombre, imagen, onVerMas }) => {
  return (
    <div className="tarjeta_Servicio">
      <h3>{nombre}</h3>
      <div className="imagen_contenedor_servicio">
        <img src={imagen} alt={nombre} className="imagen_ajustada_servicio" />
      </div>
      <button type="button" className="btn" onClick={onVerMas}>
        Ver más
      </button>
    </div>
  );
};

export default TarjetaServicio;
