import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
    '@@details/load-country-by-name',
    async (name, { extra: { client, api } }) => {
        return client.get(api.searchByCountry(name))
    }
);

export const loadNeighborsByBorder = createAsyncThunk(
    '@@details/load-neighbors',
    async (borders, { extra: { client, api } }) => {
        return client.get(api.filterByCode(borders))
    }
)

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbors: [],
}

export const detailsSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {
        clearDetails: () => initialState,

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state, action) => {
                state.error = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadCountryByName.fulfilled, (state, action) => {
                state.status = 'received';
                state.currentCountry = action.payload.data[0]
            })
            .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
                state.status = 'received';
                state.neighbors = action.payload.data.map((country) => country.name);
            })
    }
});

export const { clearDetails } = detailsSlice.actions;
export default detailsSlice.reducer;

// Selectors 
export const selectDetails = (state) => state.details;
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectNeighbors = (state) => state.details.neighbors;