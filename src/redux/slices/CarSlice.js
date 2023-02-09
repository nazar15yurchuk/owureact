import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    errors: null,
    loading: null,
    carForUpdate: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

const {reducer: carReducer} = carSlice

