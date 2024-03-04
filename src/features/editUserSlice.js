import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || sessionStorage.getItem("token")}`,
        },
      });
      return response.data.body;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    status: 'idle',
    error: null,
  },
  reducers: {
    setEditProfile: (state, action) => {
      state.userName = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const { setEditProfile } = profileSlice.actions
export default profileSlice.reducer;
