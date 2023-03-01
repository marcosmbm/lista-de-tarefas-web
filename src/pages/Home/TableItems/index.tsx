import React from 'react'; 

import './styles.css';

export default function TableItems() {
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
                <tr>
                   <td><input type="checkbox" /></td>
                   <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                   <td>2023/03/01 00:00:00</td>
                   <td>2023/03/01 00:00:00</td>
                </tr>

                <tr>
                   <td><input type="checkbox" /></td>
                   <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                   <td>2023/03/01 00:00:00</td>
                   <td>2023/03/01 00:00:00</td>
                </tr>

                <tr>
                   <td><input type="checkbox" /></td>
                   <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                   <td>2023/03/01 00:00:00</td>
                   <td>2023/03/01 00:00:00</td>
                </tr>

                <tr>
                   <td><input type="checkbox" /></td>
                   <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                   <td>2023/03/01 00:00:00</td>
                   <td>2023/03/01 00:00:00</td>
                </tr>
            </tbody>
        </table>
   </div>
  );
}