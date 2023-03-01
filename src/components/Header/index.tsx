import React from 'react'; 

import './header.css';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className='header'>
        <img 
        src={logo} 
        alt="Logo da aplicação" 
        />

        <h2>Lista de Tarefas</h2>
    </div>
  );
}