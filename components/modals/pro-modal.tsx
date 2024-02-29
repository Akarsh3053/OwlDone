"use client";

import Image from "next/image";

import { toast } from "sonner";
import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  const onClick = () => {
    // execute({});
    toast.success("Coming Soon!!!")
  };
  
  return (
    <Dialog
       open={proModal.isOpen}
       onOpenChange={proModal.onClose}
       >
        <DialogContent className="max-w-md p-0 overflow-hidden">
            <div className="aspect-video relative flex items-center justify-center">
                <Image src={"/OwlDone.jpeg"} alt="OwlDon" className="object-cover" height={250} width={250}/>
            </div>
            <div className="mx-auto text-neutral-700 space-y-6 p-6">
                <h2 className="font-semibold text-xl">
                    Upgrade to OwlDone Pro
                </h2>
                <p className="text-xs font-semibold text-neutral-600">Create unlimited boards and do more !!</p>
                <Button
                  disabled={isLoading}
                  onClick={onClick}
                  className="w-full"
                  variant={"primary"}>
                    Upgrade
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  );
};