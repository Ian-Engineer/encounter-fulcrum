import { createSlice } from "@reduxjs/toolkit";
import schema from "../../../schema";

const fulcrumSlice = createSlice({
  name: "fulcrum",
  initialState: {
    data: schema.fulcrumSchema.dataDefault,
    battlemap: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setBattleMap: (state, action) => {
      state.battlemap = action.payload;
    },
    setCell: (state, action) => {
      let tempRow = [...action.payload.battlemap[action.payload.y]];
      tempRow[action.payload.x] = action.payload.fill;
      let tempMap = [...action.payload.battlemap];
      tempMap.splice(action.payload.y, 1, tempRow);
      state.battlemap = tempMap;
    },
  },
});

export const { setData, setBattleMap, setCell } = fulcrumSlice.actions;
export default fulcrumSlice.reducer;
