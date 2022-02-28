import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    region: '',
}

export const controlsSlice = createSlice({
    name: '@@controls',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        clearControls: () => initialState,
    }
})

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
export default controlsSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;