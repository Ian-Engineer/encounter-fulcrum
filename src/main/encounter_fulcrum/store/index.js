import { createSlice } from "@reduxjs/toolkit";
import schema from "../../../schema";

const fulcrumSlice = createSlice({
  name: "fulcrum",
  initialState: {
    data: schema.fulcrumSchema.dataDefault,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = fulcrumSlice.actions;
export default fulcrumSlice.reducer;
