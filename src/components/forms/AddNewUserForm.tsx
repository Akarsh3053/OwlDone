'use client';
import { addBoardUserAccess } from "@/app/actions/boardActions";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function AddNewUser({boardId}:{boardId:string}){
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    async function AddNewUser(formData:FormData){
        const email = formData.get('email')?.toString() || '';
        await addBoardUserAccess(boardId, email);
        if (inputRef.current){
            inputRef.current.value = '';
        }
        router.refresh();
    }


    return(
        <form action={AddNewUser} className="max-w-xs">
            <h2 className="text-lg mb-2">Add new collaborator</h2>
            <input ref={inputRef} type="text" placeholder="user@example.com" name="email"/>
            <button className="w-full mt-2" type="submit">Add User</button>
        </form>
    )
}