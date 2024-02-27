"use client";

// import { toast } from "sonner";
import { Plus, X } from "lucide-react";
import { useParams } from "next/navigation";
// import { useOnClickOutside, useEventListener } from "usehooks-ts";
import { forwardRef, useRef, ElementRef, KeyboardEventHandler} from "react";

import { Button } from "@/components/ui/button";
// import { useAction } from "@/hooks/use-action";
// import { createCard } from "@/actions/create-card";
// import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";

interface CardFormProps {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
};

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({listId, enableEditing, disableEditing,isEditing}, ref) => {
  const params = useParams();
  const formRef = useRef<ElementRef<"form">>(null);

  if (isEditing) {
    return (
        <form className="m-1 py-0.5 px-1 space-y-4">
            <FormTextarea
                id="title"
                onKeyDown={() => {}}
                ref={ref}
                placeholder="Enter a title for this card..."
            />
            <input
                hidden
                id="listId"
                name="listId"
                value={listId}
            />
        </form>
    );
  }

  return (
    <div className="pt-2 px-2">
        <Button
            onClick={enableEditing}
            className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
            size="sm"
            variant="ghost"
        >
            <Plus className="h-4 w-4 mr-2" />
            Add card
        </Button>
    </div>
  );
});

CardForm.displayName = "CardForm";