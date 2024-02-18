import { Separator } from "@/components/ui/separator";

import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";

const WorkspaceIdPage = async () => {
    return(
        <div className="w-full mb-20">
            <Info />
            <Separator className="my-3" />
            <div>
                <BoardList />
            </div>
        </div>
    );
};

export default WorkspaceIdPage;