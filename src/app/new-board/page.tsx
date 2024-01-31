'use client';
import { redirect } from "next/navigation";
import createBoard from "../actions/boardActions";

export default function NewBoardPage(){

    async function newBoard(formData: FormData){
        const boardTitle = formData.get('title')?.toString() || '';
        const {id} = await createBoard(boardTitle);
        redirect(`/boards/${id}`)
    };

    return(
        <div>
            <form action={newBoard} className="max-w-xs block">
                <h1 className="text-2xl mb-4">Create new board</h1>
                <input type="text" name="title" placeholder="Board tile"/>
                <button type="submit" className="mt-2">Create Board</button>
            </form>
        </div>
    )
}