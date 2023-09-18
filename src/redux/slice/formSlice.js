import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  arrForm: [],

};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setArrForm : (state, action) => {
        // console.log(current(state));
        // console.log(action);
        state.arrForm.push(action.payload)
        // console.log(current(state.arrForm))
    },

    deleteSinhVien : (state, action) => {
        console.log(current(state));
        console.log(action)
        const index = state.arrForm.findIndex((item) =>item.maSv == action.payload)
        console.log(index)
        state.arrForm.splice(index, 1)
    }
  },
});

export const {setArrForm, deleteSinhVien} = formSlice.actions;
export default formSlice.reducer;
