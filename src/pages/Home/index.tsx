import React from 'react'; 

import './home.css';

import Header from '../../components/Header';
import AddItemsBar from './AddItemsBar';
import TableItems from './TableItems';

export default function Home() {
  return (
   <div className='container'>
      <Header/>

      <div className="content">
        <AddItemsBar/>
      </div>

      <div className="content">
        <TableItems/>
      </div>
   </div>
  );
}