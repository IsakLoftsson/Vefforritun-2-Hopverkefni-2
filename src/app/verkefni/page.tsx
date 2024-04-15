'use client'


import React, { useEffect, useState } from 'react';
import { Post } from '@/interfaces/post';
import { getAllPosts } from '../../lib/api';

export default function Page() {
    const [data, setData] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(posts => {
                setData(posts);
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