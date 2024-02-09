'use server';

import UserList from "@/components/UserList";
import AddNewUser from "@/components/forms/AddNewUserForm";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type PageProps ={
    params: {
        boardId: string;
    }
}

export default async function BoardSettings({params}: PageProps){
    const {boardId} = params;
    const boardInfo = await liveblocksClient.getRoom(boardId);
    const userEmail = await getUserEmail();
    if (!boardInfo.usersAccesses[userEmail]){
        return(
            'Access Denied'
        )
    }

    return(
        <div>
            <Link className="inline-flex gap-1 items-center btn mb-4 max-w-xs"
                href={`/boards/${boardId}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Back to Page

            </Link>
            <h1 className="text-2xl">Board users:</h1>
            <div className="mb-8">
                <UserList emails={Object.keys(boardInfo.usersAccesses)} />
            </div>
            <AddNewUser boardId={boardId} />
        </div>
    )
}