'use client'


import React, { useEffect, useState } from 'react';
import { Post } from '@/interfaces/post';
import { getAllPosts } from '../../lib/api';

export default function Page() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(posts => {
                setPosts(posts);
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
    if (!posts || posts.length === 0) {
        return <p>No data found</p>;
    }

    return (
        <div>
            <h1>Data from My API</h1>
            {posts.map(post => ( 
                <div key={post.id}>
                    <p>Name: {post.name}</p>
                    <p>Description: {post.description}</p>
                    <p>Date: {post.date}</p>
                    <p>Task Type: {post.task_type.name}</p>
                    <p>Task Tag: {post.task_tag.name}</p>
                </div>
            ))}
        </div>
    );
};