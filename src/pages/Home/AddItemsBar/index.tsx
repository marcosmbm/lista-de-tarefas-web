import React from 'react';

import './styles.css';

export default function AddItemsBar() {
    return (
        <form className='form-content'>
            <input
                type="text"
                placeholder='Digite sua tarefa'
            />

            <button>Adicionar</button>
        </form>
    );
}