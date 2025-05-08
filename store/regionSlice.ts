import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface RegionState {
  value: string;
}

const initialState: RegionState = {
  value: 'All',
};


const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;
export default regionSlice.reducer;
