import React from "react";
import { useHistory, useLocation } from "react-router";
// import useAuth from './../../../hooks/useAuth';
import useAuth from "../../../Hooks/useAuth";
import './Login.css'
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
    <div className="text-center login-container">
      <h2 className=" text-info  ">Please Login</h2>

      {/* <button onClick={signInUsingGoogle} className="btn btn-outline-info">Google Sign In</button> */}
      <button onClick={handleGoogleLogin} className="btn btn-outline-info mt-3">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
