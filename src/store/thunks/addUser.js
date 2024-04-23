import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("user/add", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.person.fullName(),
  });

  // await pause(1000);
  console.log("response", response.data);
  return response.data;
});

// DEV ONLY
// const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export { addUser };
