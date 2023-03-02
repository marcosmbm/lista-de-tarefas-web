import { Task } from '../../../models/task';

import './styles.css';

import {formattedDate} from '../../../utils/formattedDate';

export interface TableItemsProps{
    tasks: Task[];
}

export default function TableItems({tasks} : TableItemsProps) {
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
                            <tr key={item.id}>
                                <td><input type="checkbox" /></td>
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