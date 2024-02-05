'use client';
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";
import { RoomProvider } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

const defaultColumns = [
    { id: 'col1', name: 'todo', index: 0 },
    { id: 'col2', name: 'in progress', index: 1 },
    { id: 'col3', name: 'done', index: 2 },
];

export type CardType = {
    id: string | number;
    name: string;
    index: number;
    columnId: string;
};

const defaultCards = [
    { id: 'dwsd', name: 'task 1', index: 0, columnId: 'col1' },
    { id: 'dwsk', name: 'task 4', index: 1, columnId: 'col1' },
    { id: 'fwfw', name: 'task 2', index: 1, columnId: 'col2' },
    { id: 'fef', name: 'task 3', index: 2, columnId: 'col3' },
];

export default function Board({id}: {id:string}) {
    const [cards, setCards] = useState(defaultCards);
    const [columns, setColumns] = useState(defaultColumns);
    return (
        <RoomProvider 
            id="{id}" 
            initialPresence={{}} 
            initialStorage={{
                columns: new LiveList(),
            }}>
            <ClientSideSuspense fallback={<div>Loading...</div>}>{() => (
                <>
                    <div className="flex gap-4">
                        {columns.map(column => (
                            <Column
                                key={column.id}
                                {...column}
                                setCards={setCards}
                                cards={cards
                                    .sort((a,b) => a.index - b.index)
                                    .filter(c => c.columnId === column.id)
                                } />
                        ))}
                        <NewColumnForm />
                    </div>
                </>
            )}
            </ClientSideSuspense>
        </RoomProvider>
    );
}