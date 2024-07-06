import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice(
    {
        name: "trailer",
        initialState: {
            showTrailer: false
        },
        reducers: {
            toggleSliceView: (state, action) => {
                state.showTrailer = !state.showTrailer;
            }
        }
    }
);
export const  {toggleSliceView} = trailerSlice.actions;
export default trailerSlice.reducer;