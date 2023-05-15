import { Option } from "components/App/JokesForm/JokesForm";
import { formatCategories } from "helpers/formatCategories";

type ApiResponseType = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

type FetcherPropsType = {
  url: string;
};

const fetcher = async ({ url }: FetcherPropsType) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Response not ok");
  }

  const data = await res.json();
  return data;
};

export const getMultipleJokes = async ({
  numberOfJokes,
}: {
  numberOfJokes: number;
}) => {
  const jokes: string[] = [];
  for (let i = 0; i < numberOfJokes; i++) {
    const newJoke: ApiResponseType = await fetcher({
      url: "https://api.chucknorris.io/jokes/random",
    });
    jokes.push(newJoke.value);
  }
  return jokes;
};

export const getCategories = async () => {
  const categories: string[] = await fetcher({
    url: "https://api.chucknorris.io/jokes/categories",
  });
  return formatCategories(categories);
};

export const getJoke = async (category?: Option | null) => {
  const joke: ApiResponseType = await fetcher({
    url: category
      ? `https://api.chucknorris.io/jokes/random?category=${category.value}`
      : "https://api.chucknorris.io/jokes/random",
  });
  return joke;
};
