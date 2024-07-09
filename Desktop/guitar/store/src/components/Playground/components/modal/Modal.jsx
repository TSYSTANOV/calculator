import { useDispatch } from "react-redux";
import { resetStore } from "../../../../redux/slices/PlaygroundSlice";
import { ResultMessage } from "./ResultMessage";
import { Button } from "../../../UI/Button/Button";
import { TypographyHeader } from "../../../UI/Typography/TypographyHeader";
import { Modal as ModalMaterial } from "@mui/material";
import s from "./Modal.module.css";
function Modal({ totalSuccessful, totalUnSuccessful, setIsShowModal, open }) {
  const dispatch = useDispatch();
  return (
    <ModalMaterial
      className={s.wrapper}
      open={open}
      onClose={() => {
        setIsShowModal(false);
      }}
    >
      <div
        className={
          s.container + " " + `${totalSuccessful ? s.success : s.fail}`
        }
      >
        <ResultMessage isSuccess={totalSuccessful ? true : false} />
        <Button
          onClick={() => {
            setIsShowModal(false);
            dispatch(resetStore());
          }}
          classNames={s.button}
        >
          Start new game
        </Button>
      </div>
    </ModalMaterial>
  );
}
export { Modal };
