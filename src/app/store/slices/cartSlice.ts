import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {serviceType} from "../../types"



const initialState: serviceType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<serviceType>) => {
      const exists = state.find((item) => item.serviceId === action.payload.serviceId);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeService: (state, action:PayloadAction<number>) => {
      return state.filter((item:serviceType)=>item.serviceId!==action.payload);
    }
  },
});

export const { addService,removeService } = cartSlice.actions;
export default cartSlice.reducer;
