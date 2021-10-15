import React from "react";
import { useHistory, useLocation } from "react-router";
// import useAuth from './../../../hooks/useAuth';
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";
// import useAuth from './../../../Hooks/useAuth'

const Login = () => {
  const { signInUsingGoogle, signInUsingFacebook, setUser, setIsLoading } =
    useAuth();
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
  const handleFacebookLogin = () => {
    signInUsingFacebook()
      .then((result) => {
        history.push(location.state?.from || "/home");
        setUser(result.user);
        // console.log("facebbok user", result.user)
      })
      .finally(() => setIsLoading(false));
  };

  // const { signInUsingGoogle } = useAuth();
  return (
    <div className="text-center login-container ">
      {/* <h2 className=" text-info  ">Please Login</h2> */}

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center mb-5 fw-light fs-5 ">
                  Please Sign In
                </h2>
                <>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-info btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button
                      onClick={handleGoogleLogin}
                      className="btn btn-google btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button
                      onClick={handleFacebookLogin}
                      className="btn btn-facebook btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign in with
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
