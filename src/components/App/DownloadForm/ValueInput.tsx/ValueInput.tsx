import "@styles/components/app/download-form/value-input/styles.scss";
import { Dispatch } from "react";
import { ValueAction, ValueState } from "../DownloadForm";

type ValueInputPropsType = {
  value: ValueState;
  valueDispatch: Dispatch<ValueAction>;
};

const ValueInput = ({ value, valueDispatch }: ValueInputPropsType) => {
  return (
    <div
      className={
        value.value > 100 ? "value-input-wrapper error" : "value-input-wrapper"
      }
    >
      <button
        type="button"
        onClick={() => valueDispatch({ type: "decrease", payload: 1 })}
        className="value-button"
      >
        <span className="value-button-icon">-</span>
      </button>
      <input
        type="number"
        className="value-input"
        min={0}
        value={value.value}
        onChange={(e) =>
          valueDispatch({ type: "change", payload: e.target.valueAsNumber })
        }
      />
      <button
        type="button"
        onClick={() => valueDispatch({ type: "increase", payload: 1 })}
        className="value-button"
      >
        <span className="value-button-icon">+</span>
      </button>
    </div>
  );
};
export default ValueInput;
