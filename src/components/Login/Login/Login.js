import React from 'react';
// import useAuth from './../../../hooks/useAuth';
import useAuth from '../../../Hooks/useAuth'
// import useAuth from './../../../Hooks/useAuth'

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    // const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;