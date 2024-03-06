import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = { todo_value: [], locations: [], trips: []};

export const todoSlice = createSlice({
    name: 'todos',
    initialState: INITIAL_STATE,
    reducers: {
        remove: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        add (state, action) {
            state.value.push(action.payload)
        }

    }
})

export const {remove, add} = todoSlice.actions;
export default todoSlice.reducer;