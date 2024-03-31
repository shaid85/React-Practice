import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

const todoStore = (set) => ({
    todolist: [],
    addTodo: (todo) => {
        set((state) => ({
            todolist: [todo, ...state.todolist]
        }))
    },
    removeTodo: (todoId) => {
        set((state) => ({
            todolist: state.todolist.filter((todo) => todo.id !== todoId)
        }))
    },
    toggleTodoStatus: (todoId) => {
        set((state) => ({
            todolist: state.todolist.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
        }))
    }
})

const useTodoStore = create(
    devtools(
        persist(todoStore, {
            name: "todolist",
        })
    )
)

export default useTodoStore