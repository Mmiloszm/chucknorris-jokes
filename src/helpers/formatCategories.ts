import { Option } from "components/App/JokesForm/JokesForm";

export const formatCategories = (categories: string[]) => {
  const formattedCategories: Option[] = [];
  categories.forEach((category) => {
    formattedCategories.push({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    });
  });
  return formattedCategories;
};
