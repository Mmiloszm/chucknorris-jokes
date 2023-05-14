import ValueInput from "./ValueInput.tsx/ValueInput";

import "@styles/components/app/download-form/styles.scss";
import { useReducer } from "react";
import { getMultipleJokes } from "lib/api";

export type ValueAction = {
  type: "increase" | "decrease" | "change";
  payload: number;
};

export type ValueState = {
  value: number;
};

const valueReducer = (state: ValueState, action: ValueAction) => {
  const { type, payload } = action;
  switch (type) {
    case "increase":
      return {
        ...state,
        value: state.value + payload,
      };
    case "decrease":
      return {
        ...state,
        value: state.value - payload,
      };

    case "change":
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};

const DownloadForm = () => {
  const [value, valueDispatch] = useReducer(valueReducer, { value: 0 });

  return (
    <>
      <form className="download-form">
        <ValueInput value={value} valueDispatch={valueDispatch} />
        <button
          type="button"
          className="download-button"
          disabled={value.value < 1 || value.value > 100}
          onClick={async () => {
            const jokes = await getMultipleJokes({ numberOfJokes: 10 });
            console.log(jokes);
          }}
        >
          Save Jokes
        </button>
      </form>
      {value.value > 100 && (
        <p className="error-message">You can pick a number from 1 to 100</p>
      )}
    </>
  );
};

export default DownloadForm;
