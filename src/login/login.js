import React, { useState } from 'react';
import './login.css';   
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin@siet.ac.in' && password === 'admin') {
            console.log('Login successful');
            window.location.href = '/home';
        } else {
            console.log('Invalid email or password');
        }
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <label>Email:</label>
                    <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="user-box">
                    <label>Password:</label>
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='button'>Login</button>
            </form>
        </div>
    );
};

export default Login;