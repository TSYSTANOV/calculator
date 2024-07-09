import { useDispatch, useSelector } from "react-redux";
import { constants } from "../../../../constants/constants";
import s from "./RandomKeys.module.css";
import { RandomArrows } from "./components/RandomArrows";
import { WelcomeText } from "./components/WelcomeText";
import { TypographyHeader } from "../../../UI/Typography/TypographyHeader";
function RandomKeys({ isTimerActive }) {
  const { steps } = useSelector((state) => state.play);

  return (
    <div className={s.container}>
      <TypographyHeader>Random Keys</TypographyHeader>
      {steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows steps={steps} />
      )}
    </div>
  );
}
export { RandomKeys };
