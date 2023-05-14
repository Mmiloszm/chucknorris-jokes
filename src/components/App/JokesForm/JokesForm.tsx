import { useState } from "react";
import CategorySelect from "./CategorySelect/CustomSelect";
import JokeInput from "./JokeInput/JokeInput";
import "@styles/components/app/jokes-form/styles.scss";

const JokesForm = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <CategorySelect />
      <JokeInput name={name} setName={setName} />
      <button type="submit" className="submit-button">
        {name
          ? `Draw a random ${name} Joke`
          : "Draw a random Chuck Norris Joke"}
      </button>
    </form>
  );
};

export default JokesForm;
