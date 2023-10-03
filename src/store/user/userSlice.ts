import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: UserState = {
  accessToken: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTokens: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
      }>,
    ) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.refreshToken = null;
      state.accessToken = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
