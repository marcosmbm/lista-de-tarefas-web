import React from 'react'; 

import './home.css';

import Header from '../../components/Header';

export default function Home() {
  return (
   <div className='container'>
      <Header/>

      <div className="content">
          <form className='form-content'>
            <input 
              type="text" 
              placeholder='Digite sua tarefa'
            />

            <button>Adicionar</button>
          </form>
      </div>
   </div>
  );
}