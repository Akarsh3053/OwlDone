import { db } from "@/lib/db";

import { Board } from "./board";
import { CreateBoardForm } from "./createBoardForm";

const WorkspaceIdPage = async () => {
    const boards = await db.board.findMany();

    return(
        <div className="flex flex-col space-y-4">
            <CreateBoardForm />
            <div className="space-y-2">
                {boards.map((board) => (
                    <Board key={board.id} title={board.title} id={board.id} />
                ))}
            </div>
        </div>
    );
};

export default WorkspaceIdPage;