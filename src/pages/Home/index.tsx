import {useState} from 'react'; 
import { Task } from '../../models/task';

import './home.css';

import Header from '../../components/Header';
import AddItemsBar from './AddItemsBar';
import TableItems from './TableItems';

export default function Home() {

  const [tasks,setTasks] = useState<Task[]>([]);

  function handleAddItem(task: Task){
    setTasks((tasks) => [...tasks, task]);
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
          tasks={tasks}
        />
      </div>
   </div>
  );
}