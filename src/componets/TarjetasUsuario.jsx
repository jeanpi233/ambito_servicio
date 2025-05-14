const TarjetaUsuario = ({ nombre, imagen, onVer }) => {
  return (
    <div className="tarjeta_Usuario">
      <h3 className="usuario_nombre">{nombre}</h3>
      <div className="imagen_contenedor_usuario">
        <img src={imagen} alt={nombre} className="imagen_ajustada_usuario" />
      </div>
      <button type="button" className="btn" onClick={onVer}>
        Ver
      </button>
    </div>
  );
};

export default TarjetaUsuario;
