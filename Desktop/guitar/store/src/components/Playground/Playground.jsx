import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  setSteps,
  setUnSuccess,
} from "../../redux/slices/PlaygroundSlice";
import { useEffect, useRef, useState } from "react";
import { Controls } from "./components/controls/Controls";
import { RandomKeys } from "./components/randomKeys/RandomKeys";
import { KeyPressed } from "./components/keyPressed/KeyPressed";
import { Score } from "./components/score/Score";
import { Modal } from "./components/modal/Modal";
import { Description } from "./components/description/Description";
import s from "./Playground.module.css";

function Playground() {
  const { totalSuccessful, totalUnSuccessful } = useSelector(
    (state) => state.play
  );
  const dispatch = useDispatch();
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState(null);
  const [isUnSuccessEndGame, setIsUnSuccessEndGame] = useState(null);
  const timerID = useRef();
  useEffect(() => {
    if (totalSuccessful >= 3) {
      setIsSuccessEndGame(true);
    }
    if (totalUnSuccessful >= 3) {
      setIsUnSuccessEndGame(true);
    }
  }, [totalSuccessful, totalUnSuccessful]);
  useEffect(() => {
    if (isSuccessEndGame || isUnSuccessEndGame) {
      setIsShowModal(true);
      setIsTimerActive(false);
      setIsSuccessEndGame(false);
      setIsUnSuccessEndGame(false);
    }
  }, [isSuccessEndGame, isUnSuccessEndGame]);
  useEffect(() => {
    if (isTimerActive) {
      timerID.current = setInterval(() => {
        dispatch(setUnSuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, 1000);
    } else {
      clearInterval(timerID.current);
    }
    return () => {
      clearInterval(timerID.current);
    };
  }, [isTimerActive]);

  return (
    <div className={s.container}>
      <div className={s.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>

      <div className={s.column}>
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
        <Description />
      </div>

      <Modal
        open={isShowModal}
        setIsShowModal={setIsShowModal}
        totalSuccessful={totalSuccessful}
        totalUnSuccessful={totalUnSuccessful}
      />
    </div>
  );
}
export { Playground };
