import { userApi } from "@/store/user/userApi.ts";
import userSlice from "@/store/user/userSlice.ts";
import { setStorageItem } from "@/utils/storage.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

store.subscribe(() => {
  setStorageItem(store.getState().user.accessToken, "accessToken");
  setStorageItem(store.getState().user.refreshToken, "refreshToken");
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
