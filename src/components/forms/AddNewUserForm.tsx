'use client';
import { addBoardUserAccess } from "@/app/actions/boardActions";
import { useRouter } from "next/navigation";

export default function AddNewUser({boardId}:{boardId:string}){
    const router = useRouter();
    async function AddNewUser(formData:FormData){
        const email = formData.get('email')?.toString() || '';
        await addBoardUserAccess(boardId, email);
        router.refresh();
    }


    return(
        <form action={AddNewUser} className="max-w-xs">
            <h2 className="text-lg mb-2">Add new collaborator</h2>
            <input type="text" placeholder="user@example.com" name="email"/>
            <button className="w-full mt-2" type="submit">Add User</button>
        </form>
    )
}