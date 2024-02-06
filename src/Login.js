import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";
import "./Login.css";
import Logo from './images/new-logo.png';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); 

        auth
            .signInWithEmailAndPassword(email,password)
            .then( auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

        // some fancy firebase login stuff....
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message)) 

        // do some fancy firebase register stuff....
    }
  return <div className="login">
            <Link to='/'>
                <img
                 className='login__logo'
                 src={Logo} />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                     type='text' 
                     value={email} 
                     onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)} 

                    />

                    <button
                     className='login__signInButton'
                     onClick={signIn}
                     type='submit'
                     > Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Fashion Place Conditions of Use & and Sale.
                    Please see our Privacy Notice, our Cookies Notice and Interest-Based Ads 
                </p>

                <button
                 onClick={register}
                 className='login__registerButton'>Create your Account</button>
            </div>
        </div>;
}

export default Login;
