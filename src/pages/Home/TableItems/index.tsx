import { Task } from '../../../models/task';

import {FaTrash} from 'react-icons/fa';
import './styles.css';

import {formattedDate} from '../../../utils/formattedDate';

import { db } from '../../../services/db';

export interface TableItemsProps{
    tasks: Task[];
    deleteItem: (id: number) => void;
}

export default function TableItems({tasks, deleteItem} : TableItemsProps) {

    async function toggleCompleted(task: Task){
        const completedDate = task.completed ? undefined : new Date();

        await db.tasks.update(
            task.id || 0, 
            {completed: !task.completed, completedDate: completedDate}
        )
    }

  return (
   <div className='table-content'>
        <table>
            <thead>
                <tr>
                    <th className='checkbox'>#</th>
                    <th className='description'>Descrição</th>
                    <th>Criado</th>
                    <th>Finalizado</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    tasks.map((item) => {
                        return(
                            <tr 
                                key={item.id}
                                className={item.completed ? 'checked' : ''}
                            >
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={item.completed}
                                        onChange={() => toggleCompleted(item)}
                                    />
                                </td>
                                <td>{item.description}</td>
                                <td>{formattedDate(item.createdDate)}</td>
                                <td>{formattedDate(item?.completedDate)}</td>
                                <td>
                                    <button
                                        onClick={() => deleteItem(item.id || 0)}
                                    >
                                        <FaTrash/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
   </div>
  );
}