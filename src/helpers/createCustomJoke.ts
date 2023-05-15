export const createCustomJoke = (joke: string, replacement: string) => {
  const regex = /Chuck Norris/gi;
  return joke.replace(regex, replacement);
};
