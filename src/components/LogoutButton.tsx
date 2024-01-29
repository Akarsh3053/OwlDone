'use client'
import { signOut } from "next-auth/react"

export default function LogoutButton(){
    return(
        <button
        onClick={() => signOut()} 
        className="bg-gray-300 py-2 px-4 ml-1">Logout</button>
    )
}