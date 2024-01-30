'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut } from "next-auth/react"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export default function LogoutButton(){
    return(
        <button
        onClick={() => signOut()} 
        className="bg-gray-300 py-2 px-4 ml-1 rounded-md inline-flex gap-2 items-center">
            Logout <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
    )
}