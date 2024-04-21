'use client'


import React, { useEffect, useState } from 'react';
import { User } from '@/interfaces/user';
import { getAllUsers } from '../../lib/api';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.alert('Vinsamlegast skráðu þig inn til að fá aðgang að notendaupplýsingum.');
            router.push('/innskraning');
        }
      }, []);

    useEffect(() => {
        getAllUsers()
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!users || users.length === 0) {
        return <p>No data found</p>;
    }

    return (
        <div className='Verkefni'>
            <h1>Notendur</h1>
            <div className='verkefniupprodun'>
            {users.map(user => ( 
                <div className='verkefnacard' key={user.id}>
                    <p>Username: {user.name}</p>
                    <p>password: {user.password}</p>
                    <p>Admin status: {user.admin}</p>
                </div>
            ))}
            </div>
        </div>
    );
};