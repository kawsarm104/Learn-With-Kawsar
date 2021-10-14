import React from "react";
import { useHistory, useLocation } from "react-router";
// import useAuth from './../../../hooks/useAuth';
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";
// import useAuth from './../../../Hooks/useAuth'

const Login = () => {
  const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(location.state?.from || "/home");
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  // const { signInUsingGoogle } = useAuth();
  return (
    <div className="text-center login-container ">
      {/* <h2 className=" text-info  ">Please Login</h2> */}

      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label class="form-check-label" for="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-info btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <hr class="my-4" />
                  <div class="d-grid mb-2">
                    <button
                      onClick={handleGoogleLogin}
                      class="btn btn-google btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i class="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-facebook btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i class="fab fa-facebook-f me-2"></i> Sign in with
                      Facebook
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={signInUsingGoogle} className="btn btn-outline-info">Google Sign In</button> */}
      {/* <div className="">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline-info mt-3"
        >
          Google Login
        </button>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline-info mt-3"
        >
          Facebook Login
        </button>
      </div> */}
    </div>
  );
};

export default Login;
