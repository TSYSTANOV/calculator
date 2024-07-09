import { Typography } from "@mui/material";
import s from "./Typography.module.css";
function TypographyHeader({ children, classNames }) {
  return (
    <Typography variant="h3" className={s.text + " " + classNames}>
      {children}
    </Typography>
  );
}
export { TypographyHeader };
