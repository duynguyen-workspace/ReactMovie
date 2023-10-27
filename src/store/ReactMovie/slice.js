import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chairsBooking: [],
    chairsBooked: []
}

export const btMovieSlice = createSlice({
    name: "BTMovie",
    initialState,
    reducers: {
        setChairBooking: (state, { payload }) => {
            // console.log("action: ", action)
            const index = state.chairsBooking.findIndex((value) => value.soGhe == payload.soGhe)

            if (index != -1) {
                state.chairsBooking.splice(index, 1)
            } else {
                state.chairsBooking.push(payload)
            }
            
        },
        checkOut: (state, action) => {
            state.chairsBooked = [...state.chairsBooked,...state.chairsBooking]
            state.chairsBooking = []
        }
    }
})

export const { reducer: btMovieReducer, actions: btMovieActions } = btMovieSlice 