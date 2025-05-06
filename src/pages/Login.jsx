import './Login.css';

const Login = () => {
    return (
        <div className="container">
          <input id="signup_toggle" type="checkbox" />
          <form className="form">
            <div className="form_front">
              <div className="form_details">Buscar cliente</div>
              <input
                type="text"
                className="input"
                placeholder="Correo"
              />
              <button type="button"  className="btn">
                Buscar
              </button>
              <div class="btnt">
                <button class="btnt">Ver lista</button>
            </div>
              <span className="switch">
                <label for="signup_toggle" className="signup_tog">
                Buscar producto
                </label>
              </span>
            </div>
            <div className="form_back">
              <div className="form_details">Buscar producto</div>
              <input
                type="text"
                className="input"
                placeholder="ID"
              />
              <button type="button"  className="btn">
                Buscar
              </button>
              <span className="switch">
                <label for="signup_toggle" className="signup_tog">
                  Buscar cliente 
                </label>
              </span>
            </div>
          </form>
        </div>
      );
    }
    
    export default Login;
    