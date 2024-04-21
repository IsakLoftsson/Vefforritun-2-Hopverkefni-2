'use client'
import React, { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deletePostBySlug, getAllTypes, getPostByID, patchPostBySlug } from '@/lib/api';
import { Post } from '@/interfaces/post';
import { Task_type } from '@/interfaces/task_type';
import NotFound from '@/app/not-found';

export default function Verkefni({ params }: { params: { id: string } }) {
    const [verkefni, setVerkefni] = useState<Post | null>(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [taskTypes, setTaskTypes] =useState<Task_type[] | null> ([]);

    useEffect(() => {
        const fetchVerkefni = async () => {
            const fetchedVerkefni = await getPostByID(params.id);
            setVerkefni(fetchedVerkefni);
        };

        const fetchFlokkar = async () => {
            try {
                const fetchedFlokkar = await getAllTypes();
                setTaskTypes(fetchedFlokkar || []);
            } catch (error) {
                console.error('Failed to fetch task types:', error);
                setTaskTypes([]);
            }
        };

        fetchVerkefni().catch(console.error);
        fetchFlokkar().catch(console.error);
    }, [params.id]);

    if (verkefni === null) {
        return NotFound();
    }

    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            await patchPostBySlug(params.id,{
                name: name,
                description: description,
            })
        }catch (error) {
            console.error('Failed to update:', error);
        }
    
        
    };
    
    const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try{
            await deletePostBySlug(params.id)
        }
        catch (error) {
            console.error('Failed to delete:', error);
        }
        
    
    }

    return (
        <div>
            <div>
                <p>Verkefni: {verkefni.name}</p>
                <p>Upplýsingar: {verkefni.description}</p>
                <p>Dagsetning: {verkefni.date}</p>
                <p>Verkefna flokkur: {verkefni.task_type.name}</p>
                <p>Verkefna tegund: {verkefni.task_tag.name}</p>
            </div>
            <div>
            <form onSubmit={handleUpdate}>
                <label htmlFor="name">Verkefni:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="description">Upplýsingar:</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Uppfæra</button>
            </form>
            <button onClick={handleDelete}>Eyða</button>
            </div>
        </div>
    );
}
  
