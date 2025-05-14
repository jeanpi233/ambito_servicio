const Encabezado = ({ titulo }) => {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>  {/* El título es dinámico y puede cambiar dependiendo de la vista */}
    </header>
  );
};

export default Encabezado;
