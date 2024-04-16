'use client'


import React, { useEffect, useState } from 'react';
import {  getAllTypes } from '../../lib/api';
import { Task_type } from '@/interfaces/task_type';


export default function Page() {
    const [data, setData] = useState<Task_type[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllTypes()
            .then(types => {
                setData(types);
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
    if (!data || data.length === 0) {
        return <p>No data found</p>;
    }

    return (
        <div>
            <h1>Data from My API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};