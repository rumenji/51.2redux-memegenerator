import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = { value: [{url: "google.com", top: "Top text", bottom: "Bottom text"}], };

export const memeSlice = createSlice({
    name: 'memes',
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

export const {remove, add} = memeSlice.actions;
export default memeSlice.reducer;