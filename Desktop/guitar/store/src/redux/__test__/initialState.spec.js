import PlaygroundSlice, {
  initialState,
  setCurrentStep,
  setSteps,
} from "../slices/PlaygroundSlice";

describe("initial state", () => {
  it("check setCurrentStep", () => {
    const state = PlaygroundSlice(initialState, { type: setCurrentStep });
    expect(initialState.currentStep).toEqual(0);
    expect(state.currentStep).toEqual(1);
    const state2 = PlaygroundSlice(state, { type: setSteps });
    console.log(state2);
  });
});
