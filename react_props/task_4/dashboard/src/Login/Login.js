import React, { Component, Fragment } from "react";
import "./Login.css";



class Login extends Component{
    render() {
        return (
            <Fragment>
                <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label for='email'>Email</label>
        <input id='email' type='email'></input>
        <label for='password'>Password</label>
        <input id='password' type='password'></input>
        <button>OK</button>
        </div>
            </Fragment>
        );
    }
}

export default Login;