import { createSlice } from "@reduxjs/toolkit";
import { ARR_ARROR_CODES } from "../../constants/constants";

export const initialState = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnSuccessful: 0,
};

const playgroundSlice = createSlice({
  name: "playground",
  initialState: initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep += 1;
    },
    setSteps: (state) => {
      const randomNum = Math.floor(Math.random() * ARR_ARROR_CODES.length);
      state.steps.push({
        currentValue: ARR_ARROR_CODES[randomNum],
        enteredValue: null,
        step: state.currentStep,
        success: null,
      });
    },
    setEnteredValue: (state, action) => {
      if (state.steps[state.currentStep - 1].enteredValue === null) {
        state.steps[state.currentStep - 1] = {
          ...state.steps[state.currentStep - 1],
          enteredValue: action.payload,
          success:
            action.payload === state.steps[state.currentStep - 1].currentValue,
        };
      }
      if (action.payload === state.steps[state.currentStep - 1].currentValue) {
        state.totalSuccessful += 1;
        state.totalUnSuccessful = 0;
      } else {
        state.totalUnSuccessful += 1;
        state.totalSuccessful = 0;
      }
    },
    setUnSuccess: (state) => {
      if (state.steps.length) {
        if (state.steps[state.currentStep - 1].enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...state.steps[state.currentStep - 1],
            success: false,
          };
          state.totalUnSuccessful += 1;
          state.totalSuccessful = 0;
        }
      }
    },
    resetStore: (state) => {
      return initialState;
    },
  },
});

export const {
  resetStore,
  setUnSuccess,
  setCurrentStep,
  setSteps,
  setEnteredValue,
} = playgroundSlice.actions;

export default playgroundSlice.reducer;
