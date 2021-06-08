import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Sebastian Lazarte',
        email: 'sebalazarte@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;
    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);


    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {

            dispatch(startRegister(name, email, password));
        }
    }

    const isFormValid = () => {

        if (validator.isEmpty(name)) {
            dispatch(setError('el nombre es requerido'));
            return false;
        }

        if (!validator.isEmail(email)) {
            dispatch(setError('no es un email valido'))
            return false;
        }

        if (password !== password2 || password.length < 5) {
            dispatch(setError('las contraseñas no son iguales o son mejor de 5 caracteres'))
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <Fragment>
            <h3 className="auth__title">Register</h3>
            <form 
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster">
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }

                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="confirm"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link to="/auth/login" className="link">Already register?</Link>
            </form>
        </Fragment>
    )
}
