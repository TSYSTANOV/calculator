import { Button } from "../../../UI/Button/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import s from "./Controls.module.css";
import { TypographyHeader } from "../../../UI/Typography/TypographyHeader";

function Controls({ isTimerActive, setIsTimerActive }) {
  return (
    <div className={s.wrapper}>
      <Button
        disabled={isTimerActive}
        onClick={() => setIsTimerActive(true)}
        classNames={s.button}
        endIcon={<PlayArrowIcon />}
      >
        <TypographyHeader>Play</TypographyHeader>
      </Button>
      <Button
        disabled={!isTimerActive}
        onClick={() => setIsTimerActive(false)}
        endIcon={<PauseIcon />}
        classNames={s.button}
      >
        <TypographyHeader>Pause</TypographyHeader>
      </Button>
    </div>
  );
}
export { Controls };
