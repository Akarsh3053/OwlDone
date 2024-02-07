'use server';

import AddNewUser from "@/components/forms/AddNewUserForm";
import { liveblocksClient } from "@/lib/liveblocksClient";

type PageProps ={
    params: {
        boardId: string;
    }
}

export default async function BoardSettings({params}: PageProps){
    const {boardId} = params;
    const boardInfo = await liveblocksClient.getRoom(boardId);

    return(
        <div>
            <h1 className="text-2xl">Board users:</h1>
            {Object.keys(boardInfo.usersAccesses).map(email => (
                <div>
                    {email}
                </div>
            ))}
            <AddNewUser />
        </div>
    )
}