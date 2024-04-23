/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        // isLoading: false,
        // error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fetchUsers.pending, (state, action) => {
        //     state.isLoading = true;
        // })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.data = action.payload;
        })
        // builder.addCase(fetchUsers.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.error;
        // })

        // builder.addCase(addUser.pending, (state, action) => {
        //     state.isLoading = true;
        // })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.data.push(action.payload);
            // state.isLoading = false;
        })
        // builder.addCase(addUser.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.error;
        // })

        builder.addCase(deleteUser.pending, (state, action) => {

        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload.id)
        })
        builder.addCase(deleteUser.rejected, (state, action) => {

        })
    }
})

export const usersReducer = usersSlice.reducer;