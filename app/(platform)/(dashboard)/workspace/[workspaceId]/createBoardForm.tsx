"use client";

import { CreateBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";

export const CreateBoardForm = () => {
    const initialState = { message: null, errors: {} };
    //@ts-ignore
    const [state, dispatch] = useFormState(CreateBoard, initialState);
    

    return(
        <form action={dispatch}>
                <div className="flex flex-col space-y-2">
                    <FormInput errors={state?.errors} />
                </div>
                <Button type="submit">Submit</Button>

        </form>
    );
}; 