import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <Fragment>
            <h3 className="auth__title">Login</h3>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="***"
                    name="password"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with social netwoks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link to="/auth/register">Create a new account</Link>
                </div>
            </form>
        </Fragment>
    )
}
