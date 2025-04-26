import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistrationState {
  password: string;
  phoneNum: string;
  firstChecked: boolean;
  secondChecked: boolean;
}

const initialState: RegistrationState = {
  password: "",
  phoneNum: "",
  firstChecked: false,
  secondChecked: false,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setPhoneNum(state, action: PayloadAction<string>) {
      state.phoneNum = action.payload;
    },
    setFirstChecked(state, action: PayloadAction<boolean>) {
      state.firstChecked = action.payload;
    },
    setSecondChecked(state, action: PayloadAction<boolean>) {
      state.secondChecked = action.payload;
    },
  },
});

export const { setPassword, setPhoneNum, setFirstChecked, setSecondChecked } =
  registrationSlice.actions;

export default registrationSlice.reducer;
