import { GetUserResponseParams } from "@/api/models/user-model.ts";
import { getLocalStorageItem } from "@/utils/storage.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  accessToken: string | null;
  refreshToken: string | null;
  user: GetUserResponseParams;
};

const initialState: UserState = {
  accessToken: getLocalStorageItem("accessToken"),
  refreshToken: getLocalStorageItem("refreshToken"),
  user: {} as GetUserResponseParams,
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
      // setStorageItem(action.payload.accessToken, "accessToken");
      // setStorageItem(action.payload.refreshToken, "refreshToken");
    },
    setUser: (state, action: PayloadAction<{ user: GetUserResponseParams }>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.refreshToken = null;
      state.accessToken = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
