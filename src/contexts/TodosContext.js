const { createContext, useState } = require("react")

export const TodosContext = createContext();

export const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const todo = {id: Date.now(), text};
        setTodos([...todos, todo]);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return <TodosContext.Provider value={{todos, addTodo, removeTodo}}>
        {children}
    </TodosContext.Provider>
}