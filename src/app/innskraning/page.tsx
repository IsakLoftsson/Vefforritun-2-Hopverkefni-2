'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, registerUser } from '../../lib/api';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        console.log('username:', username, ', password:', password)
        try {
            await loginUser({ username, password });
            router.push('/'); // Fer aftur á heimasíðu eftir login
        } catch (error) {
            setError('Innskráning tókst ekki. Vinsamlegast athugaðu hvort notandanafn og lykilorð séu rétt.');
        }
    };

    const handleRegister = async () => {
        try {
            await registerUser({ username, password });
            router.push('/'); // Fer aftur á heimasíðu eftir login
        } catch (error) {
            setError('Tókst ekki að búa til aðgang. Notendanafn er tekið.');
        }
    };

    return (
        <div>
            <h1>Login or Register</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}
