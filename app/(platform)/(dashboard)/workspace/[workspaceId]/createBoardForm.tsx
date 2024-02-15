"use client";

import { CreateBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const CreateBoardForm = () => {
    const initialState = { message: null, errors: {} };
    //@ts-ignore
    const [state, dispatch] = useFormState(CreateBoard, initialState);
    

    return(
        <form action={dispatch}>
                <div className="flex flex-col space-y-2">
                    <input 
                        id="title" 
                        name="title" 
                        required 
                        placeholder="Enter a board title"
                        className="border-black border p-1"
                    />
                    {state?.errors?.title? (
                        <div>
                            {state.errors.title.map((error: string) => (
                                <p key={error} className="text-rose-500">
                                    {error}
                                </p>
                            ))}
                        </div>
                    ): null}
                </div>
                <Button type="submit">Submit</Button>

        </form>
    );
}; 