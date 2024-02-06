'use client';
import { RoomProvider } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Columns from "./Columns";

export type CardType = {
    id: string | number;
    name: string;
    index: number;
    columnId: string;
};

export default function Board({id}: {id:string}) {
    return (
        <RoomProvider 
            id={id}
            initialPresence={{}} 
            initialStorage={{
                columns: new LiveList(),
            }}>
            <ClientSideSuspense fallback={(<div>Loading...</div>)}>{() => (
                <>
                    <Columns/>
                </>
            )}
            </ClientSideSuspense>
        </RoomProvider>
    );
}