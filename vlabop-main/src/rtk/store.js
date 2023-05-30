import { configureStore } from "@reduxjs/toolkit";
import subApiSlice from "../rtk/api.js";
import allExpSlice from "../rtk/exp.js";
import subSlice from "../rtk/sub.js";
import expByIdSlice from "../rtk/expbyid.js";
import nameSlice from '../rtk/dashboard'

const store = configureStore({
  reducer: {
    api: subApiSlice,
    allexp: allExpSlice,
    subject: subSlice,
    expid: expByIdSlice,
    names: nameSlice
  },
});

export default store;
