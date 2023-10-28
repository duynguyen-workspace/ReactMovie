import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chairsBooking: [],
    chairsBooked: [],
    chairsJustBooked: [],
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
            state.chairsJustBooked = [...state.chairsBooking]
            state.chairsBooking = []
        },
        cancelBookedChairs: (state, action) => {
            const index = state.chairsBooked.findIndex((value) => value.soGhe == state.chairsJustBooked[0].soGhe)

            if (index != -1) {
                state.chairsBooked.splice(index, state.chairsJustBooked.length)
                state.chairsJustBooked = []
            }
        }
    }
})

export const { reducer: btMovieReducer, actions: btMovieActions } = btMovieSlice 