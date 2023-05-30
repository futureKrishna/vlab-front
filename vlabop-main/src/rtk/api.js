import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginType: "",
  signupType:"",
  isLoggedIn:false
};

const SignupLoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginType: (state, action) => {
      state.loginType = action.payload;
    },
    setSignupType: (state, action) => {
      state.signupType = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default SignupLoginSlice.reducer;
export const { setLoginType,setSignupType,setIsLoggedIn } = SignupLoginSlice.actions;
