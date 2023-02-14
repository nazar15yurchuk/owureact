import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    prev: null,
    next: null,
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async({page},thunkAPI ) => {
        try {
            const {data} = await carService.getAll(page)
            return data
        }catch(e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI)=> {
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll())
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
            thunkAPI.dispatch(getAll())
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload
                state.cars = items
                state.prev = prev
                state.next = next
                state.loading = false
            })
            .addDefaultCase( (state, action) => {
                const [actionState] = action.type.split('/').slice(-1);
                state.loading = actionState === 'pending'
            })
})

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice

const carActions = {
    getAll, create, deleteById, setCarForUpdate, updateById
}

export {carActions, carReducer}

