'use client';

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserList({emails}:{emails:string[]}){
    function handleDelete(email:string){

    }
    return (
        <div className="max-w-xs">
            {emails.map(email => (
                <div className="flex gap-2 my-2 items-center max-w-xs justify-between border rounded-lg pl-4">
                    {email}
                    <button className="btn p-1 hover:bg-red-500 hover:text-white" onClick={() => handleDelete(email)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            ))}
        </div>
    );
}