import { Task } from '../../../models/task';

import './styles.css';

import {formattedDate} from '../../../utils/formattedDate';

import { db } from '../../../services/db';

export interface TableItemsProps{
    tasks: Task[];
}

export default function TableItems({tasks} : TableItemsProps) {

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
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
   </div>
  );
}