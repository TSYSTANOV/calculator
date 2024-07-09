import { useSelector } from "react-redux";
import { constants } from "../constants/constants";

export const useKeyPressedElement = () => {
  const { steps, currentStep } = useSelector((state) => state.play);
  if (steps.length) {
    const { enteredValue } = steps[currentStep - 1];
    if (enteredValue) {
      return constants[enteredValue];
    }
  }
  return "⌛";
};
