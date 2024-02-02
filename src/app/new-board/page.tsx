'use client';
import createBoard from "../actions/boardActions";
import { redirect } from "next/navigation";

export default function NewBoardPage(){

    async function newBoard(formData: FormData){
        const boardTitle = formData.get('title')?.toString() || '';
        const roomInfo = await createBoard(boardTitle);
        if (roomInfo) {
            //@ts-ignore
            redirect(`/boards/${roomInfo.id}`);
        }
    };

    return(
        <div>
            <form action={newBoard} className="max-w-xs block">
                <h1 className="text-2xl mb-4">Create new board</h1>
                <input type="text" name="title" placeholder="Board title"/>
                <button type="submit" className="mt-2">Create Board</button>
            </form>
        </div>
    )
}