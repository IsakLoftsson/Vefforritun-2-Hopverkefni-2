import { GetServerSideProps, Metadata } from "next";
import { getAllPosts, getPostByID } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";



export default async function Verkefni({ params }: { params: { id: string } }) {
    const verkefni = getPostByID(params.id);
  
    if (!verkefni) {
      
      return <p>Faild</p>
    }
  
  
    return (
        <div>
            <p>name: {(await verkefni).name}</p>
            <p>description: {(await verkefni).description}</p>
            <p>date: {(await verkefni).date}</p>
            <p>task type: {(await verkefni).task_type.name}</p>
            <p>task tag: {(await verkefni).task_tag.name}</p>
        </div>
    );
  }
  
