import './Login.css';
import { useState } from "react";
import { clientesIniciales } from "../services/database";
import { alertaRedireccion, alertaError } from "../helpers/funciones";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let redireccion = useNavigate();
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [registroNombre, setRegistroNombre] = useState("");
  const [registroCorreo, setRegistroCorreo] = useState("");
  const [registroContrasena, setRegistroContrasena] = useState("");

  const obtenerClientes = () => {
    const guardados = JSON.parse(localStorage.getItem("clientes"));
    return guardados ? guardados : clientesIniciales;
  };

  
  function buscarUsuario () {
    const listaClientes = obtenerClientes();
    return listaClientes.find((cliente) => cliente.correo.toLowerCase() === correo.toLowerCase() &&
    cliente.contraseña.toLowerCase() === contraseña.toLowerCase()
  );
  }

  function redirigirUsuario() {
    if (buscarUsuario()) {
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(redireccion, "Usuario encontrado", "/listaServicio");
    } else {
      alertaError();
    }
  }

  function registrarUsuario() {
  const listaClientes = obtenerClientes();

  const yaExiste = listaClientes.find(
    (cliente) => cliente.correo.toLowerCase() === registroCorreo.toLowerCase()
  );

  if (yaExiste) {
    alertaError("Este correo ya está registrado.");
    return;
  }

  const nuevoCliente = {
    id: listaClientes.length + 1,
    nombre: registroNombre,
    correo: registroCorreo,
    contraseña: registroContrasena,
  };

  const nuevaLista = [...listaClientes, nuevoCliente];
  localStorage.setItem("clientes", JSON.stringify(nuevaLista));

  alertaRedireccion(redireccion, "Usuario registrado correctamente", "/listaServicio");
}
    return (
        <div className="container">
          <input id="signup_toggle" type="checkbox" />
          <form className="form">
            <div className="form_front">
              <div className="form_details">Iniciar sesion</div>
              <input
                onChange={(e) => setCorreo(e.target.value)}
                type="text"
                className="input"
                placeholder="Correo"
              />
              <input
                onChange={(e) => setContraseña(e.target.value)}
                type="text"
                className="input"
                placeholder="Contraseña"
              />
                <button type="button"  onClick={() => redirigirUsuario()} className="btn">
                Inicio sesion
              </button>
              <span className="switch">
                <label for="signup_toggle" className="signup_tog">
                Crear cuenta
                </label>
              </span>
            </div>
            <div className="form_back">
              <div className="form_details">Registrate</div>
              <input
                onChange={(e) => setRegistroNombre(e.target.value)}
                type="text"
                className="input"
                placeholder="Nombre"
              />
              <input
                onChange={(e) => setRegistroCorreo(e.target.value)}
                type="text"
                className="input"
                placeholder="Correo"
              />
              <input
                onChange={(e) => setRegistroContrasena(e.target.value)}
                type="text"
                className="input"
                placeholder="Contraseña"
              />
              <button type="button" onClick={registrarUsuario} className="btn">
                Registrarse
              </button>
              <span className="switch">
                <label for="signup_toggle" className="signup_tog">
                  Ya tengo una cuenta  
                </label>
              </span>
            </div>
          </form>
        </div>
      );
    }
    
    export default Login;
    