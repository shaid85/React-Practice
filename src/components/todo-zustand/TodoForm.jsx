import { useState } from "react"
import useTodoStore from "./store/useTodoStore"

const TodoForm = () => {
    const addTodo = useTodoStore((state) => state.addTodo)

    const [todoTitle, setTodoTitle] = useState("")
    const handleCourseSubmit = () => {
        if (!todoTitle) return alert("please add a course title");
        addTodo({
            id: Math.ceil(Math.random() * 1000000),
            title: todoTitle
        })
        setTodoTitle("")
    }

    return (
        <dev className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button onClick={() => {
                handleCourseSubmit();
            }} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </dev>
    )
}

export default TodoForm