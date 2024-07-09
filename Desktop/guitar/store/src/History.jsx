import { Link } from "react-router-dom";
import { useHistoryQR } from "./hooks/useHistoryQR";
import { QRCodeSVG } from "qrcode.react";
function History() {
  const { historyCodes } = useHistoryQR();

  return (
    <>
      {historyCodes.map((code) => {
        return (
          <div>
            <QRCodeSVG value={code} />
            <p>{code}</p>
          </div>
        );
      })}
      <Link to="/">Main</Link>
    </>
  );
}
export { History };
