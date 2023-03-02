import {useLiveQuery} from 'dexie-react-hooks';
import { Task } from '../../models/task';

import './home.css';

import Header from '../../components/Header';
import AddItemsBar from './AddItemsBar';
import TableItems from './TableItems';
import ListItems from './ListItems';

import { db } from '../../services/db';

export default function Home() {

  const tasks = useLiveQuery(async () => {
    const notCompletedTasks = await db.tasks
    .filter(item => !item.completed)
    .toArray();

    const completedTasks = await db.tasks
    .filter(item => item.completed)
    .reverse()
    .sortBy('completedDate');

    return  [...notCompletedTasks, ...completedTasks];
  });

  async function handleAddItem(task: Task){
      try {
        await db.tasks.add(task);
      } 
      catch (error) {
        console.log(`Failed to add ${error}`)  
      }
  }

  async function handleDeleteItem(id: number){
    try {
      await db.tasks.delete(id)
    } 
    catch (error) {
      console.log(`Failed to delete ${error}`)  
    }
  }

  return (
   <div className='container'>
      <Header/>

      <div className="content">
        <AddItemsBar
          onAddItem={handleAddItem}
        />
      </div>

      <div className="content table-layout">
        <TableItems
          tasks={tasks || []}
          deleteItem={handleDeleteItem}
        />
      </div>

      <div className='content list-layout'>
        <ListItems
            tasks={tasks || []}
        />
      </div>
   </div>
  );
}