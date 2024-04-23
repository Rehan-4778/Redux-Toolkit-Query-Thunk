import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('user/fetch', async () => {

    const response = await axios.get('http://localhost:3001/users');

    // await pause(5000);
    return response.data;
})

// DEV ONLY!!!
// const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export { fetchUsers };