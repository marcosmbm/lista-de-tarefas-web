import {useLiveQuery} from 'dexie-react-hooks';
import { Task } from '../../models/task';

import './home.css';

import Header from '../../components/Header';
import AddItemsBar from './AddItemsBar';
import TableItems from './TableItems';

import { db } from '../../services/db';

export default function Home() {

  const tasks = useLiveQuery(() => {
    return  db.tasks.toArray()
  });

  async function handleAddItem(task: Task){
      try {
        await db.tasks.add(task);
      } 
      catch (error) {
        console.log(`Failed to add ${error}`)  
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

      <div className="content">
        <TableItems
          tasks={tasks || []}
        />
      </div>
   </div>
  );
}