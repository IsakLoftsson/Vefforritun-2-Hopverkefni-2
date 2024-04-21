'use client'
import NotFound from "@/app/not-found";
import { Task_type } from "@/interfaces/task_type";
import { getTypeBySlug, patchTypeBySlug } from "@/lib/api";
import { FormEvent, MouseEvent, useEffect, useState } from "react";



export default function Flokkar({ params, }: { params: { id: string } }) {
    const [flokkur , setFlokkur] = useState<Task_type | null>(null);
    const [name, setName] = useState("");

    useEffect(() => {
      const fetchVerkefni = async () => {
          const fetchedVerkefni = await getTypeBySlug(params.id);
          setFlokkur(fetchedVerkefni);
          setName("Flokkur")
      };

      fetchVerkefni().catch(console.error);
  }, [params.id]);

  if (flokkur === null) {
      return NotFound();
  }

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        await patchTypeBySlug(params.id, name);

    } catch (error) {
        console.error('Failed to update:', error);
    }
};

const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
}
  
  
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <label htmlFor="name">Flokkur:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Uppfæra</button>
            </form>
            <button onClick={handleDelete}>Eyða</button>
            <p>Flokkur: {flokkur.name}</p>
        </div>
    );
  }