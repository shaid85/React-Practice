/* eslint-disable no-unused-vars */
import React from 'react'
import useTodoStore from "./store/useTodoStore"

const TodoItem = () => {

    const { todolist, removeTodo, toggleTodoStatus } = useTodoStore(
        (state) => ({
            todolist: state.todolist,
            removeTodo: state.removeTodo,
            toggleTodoStatus: state.toggleTodoStatus
        })
    )

    return (
        <>
            {todolist.map((todo) => {
                return (
                    <div key={todo.id} className='w-full'>
                        <div
                            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                                }`}
                        >
                            <input
                                type="checkbox"
                                className="cursor-pointer"
                                checked={todo.completed}
                                onChange={(e) => {
                                    toggleTodoStatus(todo.id)
                                }}
                            />
                            <input
                                type="text"
                                className={`border outline-none w-full bg-transparent rounded-lg border-black/10 px-2 ${todo.completed ? "line-through" : ""}`}
                                value={todo.title}


                            />

                            <button
                                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                                onClick={() => removeTodo(todo.id)}
                            >
                                ❌
                            </button>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default TodoItem