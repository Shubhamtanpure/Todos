import { createSlice, nanoid } from "@reduxjs/toolkit";

//  nanoid = Generates a non-cryptographically-secure random ID string. createAsyncThunk uses this by default for request IDs.

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        }
    }
}
)

export const { addTodos, removeTodo } = todoSlice.actions

export default todoSlice.reducer



// payload =
// In Redux, a "payload" is typically an additional piece of data attached to an action. It contains information necessary for the reducer to update the state accordingly.

//It generates a unique ID for the new todo item using nanoid()

//It receives the todo text as action.payload.

//state: Represents the current state of the Redux store.

// action: Represents the action dispatched to trigger this reducer. It contains information about the action, including the payload.