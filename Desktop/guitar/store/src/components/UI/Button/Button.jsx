import { Stack, Button as MaterialButton } from "@mui/material";
import s from "./Button.module.css";
function Button({ children, disabled, onClick, classNames = "", endIcon }) {
  return (
    <>
      <Stack spacing={2} direction="row">
        <MaterialButton
          disabled={disabled}
          variant="contained"
          size="small"
          onClick={onClick}
          className={s.button + " " + classNames}
          endIcon={endIcon}
        >
          {children}
        </MaterialButton>
      </Stack>
    </>
  );
}
export { Button };
