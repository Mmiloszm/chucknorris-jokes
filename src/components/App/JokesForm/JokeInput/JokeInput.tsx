import "@styles/components/app/jokes-form/joke-input/styles.scss";
import { Dispatch } from "react";

type InputPropsType = {
  name: string;
  setName: Dispatch<React.SetStateAction<string>>;
};

const JokeInput = ({ name, setName }: InputPropsType) => {
  return (
    <div className="input-container">
      <input
        type="text"
        id="jokeInput"
        className={name ? "joke-input has-value" : "joke-input"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="jokeInput" className="joke-label">
        Impersonate Chuck Norris
      </label>
    </div>
  );
};

export default JokeInput;
