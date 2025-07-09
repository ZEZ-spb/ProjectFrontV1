import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BagNameState {
  bagName: string | null;
}

const initialState: BagNameState = {
  bagName: null,
};

const bagNameSlice = createSlice({
  name: 'bagName',
  initialState,
  reducers: {
    setBagName: (state, action: PayloadAction<string>) => {
      state.bagName = action.payload;
    },
    clearBagName: (state) => {
      state.bagName = null;
    },
  },
});

export const { setBagName, clearBagName } = bagNameSlice.actions;
export default bagNameSlice.reducer;