import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'classic car',
        price: "2000.00",
        description: "Redefine what's possible",
        rear_view_camera: 'yes',
        miles_per_trip: '25 mpg',
        max_speed: '140 mph',
        dimensions: '255 x 312 x 127mm',
        weight: 'Approx 2000lbs',
        cost_of_custom: 4500.00,
        make: 'Yahama'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;