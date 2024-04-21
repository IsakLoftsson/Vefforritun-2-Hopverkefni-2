'use client'


import React, { useEffect, useState } from 'react';
import { Post } from '@/interfaces/post';
import { getAllPosts } from '../../lib/api';
import Link from 'next/link';

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
        <div className='verkefni'>
            <h1>Verkefni</h1>
            <div className='verkefniupprodun'>
                {posts.map(post => (
                    <Link href={`/verkefni/${post.id}`}>
                    <div className='verkefnacard' key={post.id}>
                        
                                <p>Verkefni: {post.name}</p>
                                <p>Upplýsingar: {post.description}</p>
                                <p>Dagsetning: {post.date}</p>
                                <p>Verkefna flokkur: {post.task_type.name}</p>
                                <p>Verkefna tegund: {post.task_tag.name}</p>
                        
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};