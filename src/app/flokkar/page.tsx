'use client'


import React, { useEffect, useState } from 'react';
import {  getAllTypes } from '../../lib/api';
import { Task_type } from '@/interfaces/task_type';


export default function Page() {
    const [types, setTypes] = useState<Task_type[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllTypes()
            .then(types => {
                setTypes(types);
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
    if (!types || types.length === 0) {
        return <p>No data found</p>;
    }

    return (
        <div>
            <h1>Flokkar</h1>
            {types.map(type => ( // Proper usage of map to render JSX
                <div key={type.id}> {/* Ensure each post has a unique 'id' property */}
                    <p>{type.name}</p>
                </div>
            ))}
        </div>
    );
};