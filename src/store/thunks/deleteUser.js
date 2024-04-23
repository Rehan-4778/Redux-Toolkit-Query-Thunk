/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('user/delete', async (user) => {
    const response = await axios.delete(`http://localhost:3001/users/${user.id}`)

    // await pause(1000);
    // response does'nt give us any data after deletion so we delete manually.
    return user;
})

//  DEV ONLY
// const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export { deleteUser };