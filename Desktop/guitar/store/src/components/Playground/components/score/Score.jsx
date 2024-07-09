import { useSelector } from "react-redux";
import { TypographyHeader } from "../../../UI/Typography/TypographyHeader";
import { TypographyText } from "../../../UI/Typography/TypographyText";
import { Chip, Stack } from "@mui/material";
import s from "./Score.module.css";
function Score() {
  const { totalSuccessful, totalUnSuccessful } = useSelector(
    (state) => state.play
  );
  return (
    <div>
      <TypographyHeader>Score</TypographyHeader>

      <Stack direction="row" spacing={1}>
        <Chip
          className={s.fail}
          label={<TypographyText>Errors: {totalUnSuccessful}</TypographyText>}
          variant="outlined"
        />
        <Chip
          className={s.success}
          label={<TypographyText>Successful: {totalSuccessful}</TypographyText>}
          variant="outlined"
        />
      </Stack>
    </div>
  );
}
export { Score };
