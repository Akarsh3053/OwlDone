'use client';
import { RoomProvider } from "@/app/liveblocks.config";
import Columns from "./Columns";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Link from "next/link";

export default function Board({id, name}: {id:string, name:string}) {
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
                    <div className="flex gap-2 justify-between item-center mb-4">
                        <div className="text-2xl">Board: {name}</div>
                        <Link
                        className="flex gap-2 items-center btn"
                        href={`/boards/${id}/settings`}>
                        <FontAwesomeIcon icon={faCog} /> 
                        Board Settings
                        </Link>
                    </div>
                    <Columns/>
                </>
            )}
            </ClientSideSuspense>
        </RoomProvider>
    );
}