import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todoapp = () => {
    return (
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Use Zustand State </h1>
                <div className="mb-4">
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">

                    <TodoItem />

                </div>
            </div>
        </div>

    );
}


export default Todoapp