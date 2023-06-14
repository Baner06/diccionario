import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center ">
          {/* pb-5 Padding Botton, pt padding top, pt-sm padding top y espaciado dependiendo del responsive  */}
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            {/* Texto Log In y Sing Up, mb-0 Margin Botton */}
            <h6 className="mb-0 pb-3">
              <span>Log In </span>
              <span>Sign Up</span>
            </h6>
            {/* Checkbox que intercambia entre Log In y Sing Up */}
            <input
              className="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            {/* Activación del CheckBox mediante un label */}
            <label htmlFor="reg-log"></label>

            {/* Carta donde aparece el Log In y Sing Up */}
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                {/* Carta de Log In */}
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      {/* Texto Log In */}
                      <h4 className="mb-4 pb-3">Log In</h4>
                      {/* Email */}
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-style"
                          placeholder="Email"
                        />
                        {/* Icono */}
                        <i className="input-icon fa-solid fa-at"></i>
                      </div>

                      {/* Password */}
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Password"
                        />
                        {/* Iconos */}
                        <i class="input-icon fa-sharp fa-solid fa-key"></i>
                      </div>

                      {/* Botón de "Login" */}
                      <a href="#" className="btn mt-4">
                        Login
                      </a>

                      {/* Botón de "Olvidaste La Contraseña" */}
                      <p className="mb-0 mt-4 text-center" id="1">
                        <a href="#" className="link-fyp">
                          Forgot your password?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carta de Sing Up */}
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      {/* Texto Sing Up */}
                      <h4 className="mb-3 pb-3">Sign Up</h4>
                      {/* Nombre */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-style"
                          placeholder="Full Name"
                        />
                        {/* Icono */}
                        <i class="input-icon fa-regular fa-user"></i>
                      </div>

                      {/* Telefono */}
                      <div className="form-group mt-2">
                        <input
                          type="tel"
                          className="form-style"
                          placeholder="Phone Number"
                        />
                        {/* Icono */}
                        <i class="input-icon fa-solid fa-phone"></i>
                      </div>

                      {/* Email */}
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          className="form-style"
                          placeholder="Email"
                        />
                        {/* Icono */}
                        <i className="input-icon fa-solid fa-at"></i>
                      </div>

                      {/* Password */}
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Password"
                        />
                        {/* Icono */}
                        <i class="input-icon fa-sharp fa-solid fa-key"></i>
                      </div>

                      {/* Botón de Registro */}
                      <a href="#" className="btn mt-4">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
