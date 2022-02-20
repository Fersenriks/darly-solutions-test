import React, {useState} from 'react';

import {createNewUserWithEmailAndPassword, logInWithEmailAndPassword} from "../firebase/firebase";

import './auth.scss';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [authType, setAuthType] = useState('login');

    const handleCreateUser = (event) => {
        event.preventDefault();

        if (confirmPassword !== password) {
            return;
        }
        createNewUserWithEmailAndPassword(email, password);
    };

    const handleLogIn = (event) => {
        event.preventDefault();
        logInWithEmailAndPassword(email, password);
    };

    const toggleAuthForm = (type) => {
        if (type === authType) {
            return;
        }

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAuthType(type);
    }

    return (
        <div className={"root"}>
            <form className={"auth-form"}>
                <div>
                    <div className="form-handler">
                        <div className={authType === 'login' ? 'active' : ''} onClick={() => toggleAuthForm('login')}>Log In</div>
                        <div className={authType === 'signup' ? 'active' : ''}  onClick={() => toggleAuthForm('signup')}>Sign Up</div>
                    </div>
                    <div className={'form'}>
                        <div className={'row'}>
                            <label>Email:</label>
                            <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                        </div>
                        <div className={'row'}>
                            <label>Password:</label>
                            <input value={password} onChange={event => setPassword(event.target.value)}
                                   type="password"/>
                        </div>
                        {
                            authType === 'signup' && (<div className={'row'}>
                                <label>Confirm password:</label>
                                <input value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}
                                       type="password"/>
                            </div>)
                        }
                    </div>
                </div>
                <div className="control">
                    {
                        authType === 'login' ? <button onClick={handleLogIn}>Login</button>
                            : <button onClick={handleCreateUser}>Sign Up</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default Auth;