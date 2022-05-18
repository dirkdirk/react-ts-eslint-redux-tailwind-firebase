import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebaseAssets";
import { IUserSettings } from "./../defaultData";

const setDbSetting = ({
  key,
  value,
}: {
  key: string;
  value: string | number | boolean;
}): void => {
  console.log("userSettingsSlice.tsx - setDbSettings()");
  if (key.length > 0) {
    const userId = auth.currentUser ? auth.currentUser.uid : null;
    if (userId) {
      const userSettingsRef = ref(db, `users/${userId}/settings/${key}`);
      set(userSettingsRef, value).catch((e) => {
        console.log("userSettingsSlice.tsx - setDbSetting() - error: ", e);
      });
    }
  }
};

const initialState: IUserSettings = {};

export const userSettingsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dbSettingsToStore: (state, action: PayloadAction<IUserSettings>) => {
      state.isDark = action.payload.isDark;
      state.viewWeeksBack = action.payload.viewWeeksBack;
      state.viewWeeksForward = action.payload.viewWeeksForward;
    },
    updateIsDark: (state, action: PayloadAction<IUserSettings>) => {
      const key = "isDark";
      const value = action.payload[key];
      if (typeof value === "boolean") {
        state.isDark = value;
        setDbSetting({ key: key, value: value });
      }
    },
    updateViewWeeksBack: (state, action: PayloadAction<IUserSettings>) => {
      const key = "viewWeeksBack";
      const value = action.payload[key];
      if (typeof value === "number") {
        state.viewWeeksBack = value;
        setDbSetting({ key: key, value: value });
      }
    },
    updateViewWeeksForward: (state, action: PayloadAction<IUserSettings>) => {
      const key = "viewWeeksForward";
      const value = action.payload[key];
      if (typeof value === "number") {
        state.viewWeeksForward = value;
        setDbSetting({ key: key, value: value });
      }
    },
  },
});

export const {
  dbSettingsToStore,
  updateIsDark,
  updateViewWeeksBack,
  updateViewWeeksForward,
} = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
