import React from 'react'; 
import { Task } from '../../../models/task';

import './styles.css';

import {formattedDate} from '../../../utils/formattedDate';

import { db } from '../../../services/db';

export interface ListItemsProps{
    tasks: Task[];
}

export default function ListItems({tasks}: ListItemsProps) {

    async function toggleCompleted(task: Task){
        const completedDate = task.completed ? undefined : new Date();

        await db.tasks.update(
            task.id || 0, 
            {completed: !task.completed, completedDate: completedDate}
        )
    }

  return (
   <div className='list-content'>
        <ul className='list'>
            {
                tasks.map((item) => {
                    return(
                        <li key={item.id}>
                            <div className='header-task'>
                                <input 
                                    type={'checkbox'} 
                                    checked={item.completed}
                                    onChange={() => toggleCompleted(item)}
                                />

                                <span>{item.description}</span>
                            </div>

                            <div className='divisor' />

                            <div className="footer-task">
                                <div className="date-created">
                                    <strong>Criado</strong>
                                    {formattedDate(item.createdDate)}
                                </div>

                                <div 
                                    className={`date-completed ${item.completed ? 'completed' : ''}`}
                                >
                                    <strong>Finalizado</strong>
                                    {formattedDate(item?.completedDate)}
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
   </div>
  );
}