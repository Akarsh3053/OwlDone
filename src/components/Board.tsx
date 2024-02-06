'use client';
import { RoomProvider } from "@/app/liveblocks.config";
import Columns from "./Columns";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

export default function Board({id}: {id:string}) {
    return (
        <RoomProvider 
            id={id}
            initialPresence={{}} 
            initialStorage={{
                columns: new LiveList(),
                cards: new LiveList(),
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