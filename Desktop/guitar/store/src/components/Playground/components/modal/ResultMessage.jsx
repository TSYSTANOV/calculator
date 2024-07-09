import { TypographyText } from "../../../UI/Typography/TypographyText";

function ResultMessage({ isSuccess }) {
  return (
    <div>
      {isSuccess ? (
        <TypographyText>You win</TypographyText>
      ) : (
        <TypographyText>Sorry, but you lose...</TypographyText>
      )}
    </div>
  );
}
export { ResultMessage };
