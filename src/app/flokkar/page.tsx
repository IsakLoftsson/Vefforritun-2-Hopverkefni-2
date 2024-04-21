'use client'


import React, { useEffect, useState } from 'react';
import {  getAllTypes } from '../../lib/api';
import { Task_type } from '@/interfaces/task_type';
import Link from "next/link";

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
        <div className='flokkar'>
            <h1>Flokkar</h1>
            {types.map(type => (
                <div key={type.id}>
                <p><Link href={`/flokkar/${type.slug}`}>{type.name}</Link></p>
            </div>
            ))}
        </div>
    );
};