import Column from "./Columns";
import NewColumnForm from "./forms/NewColumnForm";

const columns = [
    { id: 'abc', name: 'todo', index: 0 },
    { id: 'ijk', name: 'in progress', index: 1 },
    { id: 'xyz', name: 'done', index: 2 }
];

export type CardType = {
    id: String;
    name: String;
    order: Number;
};

const cards = [
    { id: 'dwsd', name: 'task 1', order: 0, columnId: 'abc' },
    { id: 'fwfw', name: 'task 2', order: 1, columnId: 'ijk' },
    { id: 'fef', name: 'task 3', order: 2, columnId: 'xyz' },
];

export default function Board() {
    return (
        <div className="flex gap-4">
            {columns.map(column => (
                <Column
                    {...column}
                    cards={cards.filter(c => c.columnId === column.id)} />
            ))}
            <NewColumnForm />
        </div>
    );
}