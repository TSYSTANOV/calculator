import { TypographyText } from "../../../../UI/Typography/TypographyText";
import { Loader } from "../../loader/Loader";
import s from "../RandomKeys.module.css";
function WelcomeText({ isTimerActive }) {
  return (
    <div>
      {isTimerActive ? (
        <div className={s.icon}>
          <Loader />
        </div>
      ) : (
        <TypographyText>Press 'Play' to Start Game</TypographyText>
      )}
    </div>
  );
}
export { WelcomeText };
