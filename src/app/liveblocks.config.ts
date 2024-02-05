import { LiveList, LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
});


type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

type Column = {
  name: string;
  id: string;
  index: number;
};

type Storage = {
  columns: LiveList<LiveObject<Column>>;
};


export const {
  RoomProvider,
  useMyPresence,
  useStorage,
  useMutation,
  useRoom,
} = createRoomContext<
  Presence,
  Storage
  /* UserMeta, RoomEvent, ThreadMetadata */
>(client);