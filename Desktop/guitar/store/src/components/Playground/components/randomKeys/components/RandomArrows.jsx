import { constants } from "../../../../../constants/constants";
import s from "../RandomKeys.module.css";
function RandomArrows({ steps }) {
  const getStylesRandomKeys = (elem) => {
    if (elem.success !== null && elem.success) {
      return s.iconSuccess;
    }
    if (elem.success === null) {
      return s.iconDefault;
    }
    return s.iconUnSuccess;
  };
  return (
    <div>
      <h3>Random Arrows</h3>
      <div className={s.wrapper}>
        {steps.map((elem) => {
          return (
            <span
              key={elem.step}
              className={getStylesRandomKeys(elem) + " " + s.icon}
            >
              {constants[elem.currentValue]}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export { RandomArrows };
