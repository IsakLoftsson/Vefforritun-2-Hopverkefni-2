'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPostByID } from '@/lib/api';
import { Post } from '@/interfaces/post';
import NotFound from '@/app/not-found';

export default function Verkefni({ params }: { params: { id: string } }) {
    const [verkefni, setVerkefni] = useState<Post | null>(null);

    useEffect(() => {
        const fetchVerkefni = async () => {
            const fetchedVerkefni = await getPostByID(params.id);
            setVerkefni(fetchedVerkefni);
        };

        fetchVerkefni().catch(console.error);
    }, [params.id]);

    if (verkefni === null) {
        return NotFound();
    }

    return (
        <div>
            <p>Name: {verkefni.name}</p>
            <p>Description: {verkefni.description}</p>
            <p>Date: {verkefni.date}</p>
            <p>Task Type: {verkefni.task_type.name}</p>
            <p>Task Tag: {verkefni.task_tag.name}</p>
        </div>
    );
}
  
