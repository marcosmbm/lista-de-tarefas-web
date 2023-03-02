import Dexie, {Table} from "dexie";
import { Task } from "../models/task";

export class MyDexie extends Dexie{
    tasks!: Table<Task>

    constructor(){
        super('TasksDatabase');
        
        this.version(1).stores({
            tasks: "++id, completed, description, createdDate, completedDate"
        });
    }
}

export const db = new MyDexie();