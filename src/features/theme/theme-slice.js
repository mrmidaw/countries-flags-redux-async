import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: '@@theme',
    initialState: 'dark',
    reducers: {
        setTheme: (_, action) => {
            return action.payload
        },
    }
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;