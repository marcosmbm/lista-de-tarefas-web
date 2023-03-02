import {useState, useEffect, useRef, FormEvent} from 'react';
import { Task } from '../../../models/task';

import './styles.css';

interface AddItemsBarProps {
    onAddItem: (task: Task) => void;
}

export default function AddItemsBar({onAddItem}: AddItemsBarProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [input,setInput] = useState('');

    useEffect(() => {
        inputRef.current?.focus();
    },[]);

    function handleAddItem(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        if(input.trim() === ''){
            inputRef.current?.focus();
            return
        }

        const task = new Task(false, input.trim(), new Date());
        onAddItem(task);

        setInput('');
    }

    return (
        <form className='form-content' onSubmit={handleAddItem}>
            <input
                type="text"
                placeholder='Digite sua tarefa'
                value={input}
                onChange={(event) => setInput(event.target.value)}
                ref={inputRef}
            />

            <button type='submit'>Adicionar</button>
        </form>
    );
}