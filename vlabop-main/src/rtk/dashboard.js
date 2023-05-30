import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentName:"",
  facultyName:""
};

const nameSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    setStudentName: (state, action) => {
      state.studentName = action.payload;
    },
    setFacultyName: (state, action) => {
      state.facultyName = action.payload;
    },
  },
});

export default nameSlice.reducer;
export const { setStudentName,setFacultyName } = nameSlice.actions;
