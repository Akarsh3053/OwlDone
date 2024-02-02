'use client';

import { FormEvent } from "react";

export default function NewColumnForm(){
    
    function handleNewColumn(ev: FormEvent){
        ev.preventDefault();
        const input = (ev.target as HTMLFormElement).querySelector('input');
        const columnName = input?.value;
        alert('New column' + columnName);
    }
    
    return (
        <form onSubmit={handleNewColumn} className="max-w-xs">
            <label className="block mb-2">
                <span className="text-gray-600 block">Column name:</span>
                <input type="text" placeholder="New column name" />
            </label>
            <button type="submit" className="mt-2 block w-full">Create column</button>
        </form>
    )
}