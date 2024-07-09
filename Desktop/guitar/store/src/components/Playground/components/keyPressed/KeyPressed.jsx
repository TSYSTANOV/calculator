import { useCallback, useEffect } from "react";
import { constants } from "../../../../constants/constants";
import { useDispatch } from "react-redux";
import { setEnteredValue } from "../../../../redux/slices/PlaygroundSlice";
import { useKeyPressedElement } from "../../../../hooks/useKeyPressedElement";
import { TypographyHeader } from "../../../UI/Typography/TypographyHeader";
import s from "./KeyPressed.module.css";
function KeyPressed({ isTimerActive }) {
  const keyPressedElement = useKeyPressedElement();
  const dispatch = useDispatch();
  const handleKeyDown = useCallback(
    (e) => {
      const param = constants[e.code] ? e.code : null;
      if (isTimerActive) {
        if (param) {
          dispatch(setEnteredValue(param));
        } else {
          dispatch(setEnteredValue(false));
        }
      }
    },
    [isTimerActive]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTimerActive]);
  return (
    <div className={s.container}>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <div className={s.wrapper}>
        <span className={s.icon}>{keyPressedElement}</span>
      </div>
    </div>
  );
}
export { KeyPressed };
