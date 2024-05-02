import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux"
import { createPet, getPets as getPetsApi } from "../../services/pets";

interface IParams {
    q?: string
}

interface Redux {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getState: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: Dispatch<any>;
  }

/** Get Pets */

export const getPets = createAsyncThunk("appPets/getPets", async(data: IParams) => {
    const response = await getPetsApi();
    return { data: response }
})


export const addPet = createAsyncThunk("appPets/addPet", async(data: any, { getState, dispatch}: Redux) =>{
    const response = await createPet(data);

    dispatch(getPets({ q: " "}));
    return response;
})

export const appPetsSlice = createSlice({
    name: "appPets",
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPets.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
    }
})

export default appPetsSlice.reducer;