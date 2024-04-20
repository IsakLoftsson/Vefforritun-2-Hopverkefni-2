'use client'
import NotFound from "@/app/not-found";
import { Task_type } from "@/interfaces/task_type";
import { getTypeBySlug } from "@/lib/api";
import { useEffect, useState } from "react";


export default function Flokkar({ params }: { params: { id: string } }) {
    const [flokkur , setFlokkur] = useState<Task_type | null>(null);
  
    useEffect(() => {
      const fetchVerkefni = async () => {
          const fetchedVerkefni = await getTypeBySlug(params.id);
          setFlokkur(fetchedVerkefni);
      };

      fetchVerkefni().catch(console.error);
  }, [params.id]);

  if (flokkur === null) {
      return NotFound();
  }
  
  
    return (
        <div>
            <p>name: {flokkur.name}</p>
        </div>
    );
  }