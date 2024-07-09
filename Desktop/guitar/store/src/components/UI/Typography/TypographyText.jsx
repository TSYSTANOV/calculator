import { Typography } from "@mui/material";
import s from "./TypographyText.module.css";
function TypographyText({ children }) {
  return <Typography className={s.text}>{children}</Typography>;
}
export { TypographyText };
