import {Task_tag} from './task_tag'
import { Task_type } from './task_type';


export type Post ={
    id: number;
    title: string;
    date: string;
    task_type: Task_type;
    task_tag: Task_tag;

}