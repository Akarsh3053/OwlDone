'use server';

import Board from "@/components/Board";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";

type PageProps = {
    params: {
        boardId: string,
    };
};
export default async function BoardPage(props: PageProps){
    const boardId = props.params.boardId;
    const Useremail = await getUserEmail();
    const boardInfo = await liveblocksClient.getRoom(boardId);
    const userAccess = boardInfo.usersAccesses?.[Useremail];
    const hasAccess = userAccess && [...userAccess].includes('room:write');

    if (!hasAccess){
        return(
            <div>Access denied</div>
        );
    }

    return(
        <div>
            Board: {boardInfo.metadata.boardTitle}
            <Board id = {boardId} />
        </div>
    );
}