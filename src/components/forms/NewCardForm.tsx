'use client';

import { Card, useMutation } from "@/app/liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import { FormEvent } from "react";
import uniqid from "uniqid"

export default function NewCardForm({columnId}){

    const addCard = useMutation(({storage}, cardTitle) => {
        return storage.get('cards').push(new LiveObject<Card>({
            name: cardTitle,
            id: uniqid.time(),
            columnId: columnId,
            index: 9999,
        }))
    },[columnId]);

    function handleNewCardSubmit(ev: FormEvent){
        ev.preventDefault();
        const input = (ev.target as HTMLFormElement).querySelector('input');
        if (input){
            const cardTitle = input?.value;
            addCard(cardTitle);
            input.value = '';
        }

    }
    return(
        <form onSubmit={handleNewCardSubmit}>
            <input type="text" placeholder="Card title" />
        </form>
    );
}