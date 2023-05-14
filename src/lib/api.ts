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
    console.error("API Error");
  }

  const data: ApiResponseType = await res.json();
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
