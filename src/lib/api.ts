import { Post } from "@/interfaces/post";
import { Task_type } from "@/interfaces/task_type";

// const API_BASE_URL = 'https://vefforritun-2-hopverkefni-1.up.railway.app';
const API_BASE_URL = 'https://vefforritun-2-hopverkefni-2-api-production.up.railway.app';

export async function getAllPosts():Promise<Post[]>{
    try{
        const response = await fetch(`${API_BASE_URL}/verkefni`);
        if(!response.ok){
            throw new Error('No Network Response')
        }
        return await response.json();
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getAllTypes():Promise<Task_type[]>{
    try{
        const response = await fetch(`${API_BASE_URL}/flokkar`);
        if(!response.ok){
            throw new Error('No Network Response')
        }
        return await response.json();
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getPostByID(id: string): Promise<Post | null> {

    if(!id){
        console.error('No ID provided to getPostByID')
    }

    try {
        const response = await fetch(`${API_BASE_URL}/verkefni/${id}`);
        if (!response.ok) {
            if (response.status === 404) {
                const errorBody = await response.json();
                console.error(`Post not found: ${errorBody.error}`);

                return null;
            }
            else {
                const errorBody = await response.text();
                throw new Error(`HTTP error ${response.status}: ${errorBody}`);
            }
        }
        const post: Post = await response.json();
        return post;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypeBySlug(slug:string):Promise<Task_type | null> {
    if(!slug){
        console.error('No Slug provided to getTaskBySlug')
    }

    try{
        const response = await fetch(`${API_BASE_URL}/flokkar/${slug}`);
        if(!response.ok){
            if (response.status === 404) {
                const errorBody = await response.json();
                console.error(`Type not found: ${errorBody.error}`);

                return null;
            }
            else {
                const errorBody = await response.text();
                throw new Error(`HTTP error ${response.status}: ${errorBody}`);
            }
        }
        const type: Task_type = await response.json();
        return type;
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function loginUser(credentials: { username: string, password: string }): Promise<void> {
    console.log(credentials)
    console.log('username:', credentials.username, ', password:', credentials.password)
    try {
        console.log('credentials:', credentials, ', trying to login')
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        console.log('credentials 2:', credentials, ', trying to login')
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.error);
        }
    } catch (error) {
        console.log('credentials failed:', credentials)
        console.error('Error during login:', error);
        throw error;
    }
}

export async function registerUser(credentials: { username: string, password: string }): Promise<void> {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.error);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}
