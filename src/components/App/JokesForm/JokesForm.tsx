import { SetStateAction, useState, Dispatch } from "react";
import CategorySelect from "./CategorySelect/CustomSelect";
import JokeInput from "./JokeInput/JokeInput";
import "@styles/components/app/jokes-form/styles.scss";
import { getJoke } from "lib/api";
import { createCustomJoke } from "helpers/createCustomJoke";

export type Option = {
  value: string;
  label: string;
};

export type selectedOptionType = {
  selectedOption: Option | null;
};

type JokesFormPropsType = {
  setJoke: Dispatch<SetStateAction<string>>;
  setCustom: Dispatch<SetStateAction<boolean>>;
};

const JokesForm = ({ setJoke, setCustom }: JokesFormPropsType) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<selectedOptionType>({
    selectedOption: null,
  });

  const handleNewJoke = async () => {
    const joke = await getJoke(category.selectedOption);
    if (name) {
      setJoke(createCustomJoke(joke.value, name));
      setCustom(true);
    } else {
      setCustom(false);
      setJoke(joke.value);
    }
  };
  return (
    <form>
      <CategorySelect category={category} setCategory={setCategory} />
      <JokeInput name={name} setName={setName} />
      <button
        type="button"
        className="submit-button"
        onClick={() => handleNewJoke()}
      >
        {name
          ? `Draw a random ${name} Joke`
          : "Draw a random Chuck Norris Joke"}
      </button>
    </form>
  );
};

export default JokesForm;
