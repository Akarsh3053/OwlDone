import { DeleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
    title: string;
    id: string;
}

export const Board = ({
    title,
    id
}: BoardProps) => {

    const deleteBoard = DeleteBoard.bind(null, id);

    return(
        <form action={deleteBoard} className="flex items-center gap-x-2">
            <p>
                Board title: {title}
            </p>
            <Button type="submit" variant="destructive" size="sm">
                Delete
            </Button>
        </form>
    );
};