"use client";

import { Card } from "@prisma/client";
// import { Draggable } from "@hello-pangea/dnd";

// import { useCardModal } from "@/hooks/use-card-modal";

interface CardItemProps {
  data: Card;
  index: number;
};

export const CardItem = ({data, index}: CardItemProps) => {

  return (
    <div role="button" className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm">
        {data.title}
    </div>
  );
};