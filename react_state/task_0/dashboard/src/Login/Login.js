import React, { Component, Fragment } from "react";
import { StyleSheet, css } from 'aphrodite';



class Login extends Component{
    render() {
        return (
            <Fragment>
                <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.inputContainer)}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email'></input>
        </div>
        <div className={css(styles.inputContainer)}>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'></input>
        </div>
        <div className={css(styles.inputContainer)}>
        <button>OK</button>
        </div>
        </div>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    AppBody: {
        padding: "36px 24px",
        marginTop: "50px",
    },
    inputContainer: {
        display: "inline",
        marginBottom: "10px",
        '@media (max-width: 900px)': {
            display: "block",
    }
    }
});

export default Login;