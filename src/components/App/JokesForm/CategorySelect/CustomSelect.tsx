import { useState } from "react";
import Select, {
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  MenuProps,
  OptionProps,
} from "react-select";

const customStyles = {
  control: (
    baseStyles: CSSObjectWithLabel,
    state: ControlProps<
      {
        value: string;
        label: string;
      },
      false,
      GroupBase<{
        value: string;
        label: string;
      }>
    >
  ) => {
    let borderBottomValue = "2px solid #c4c4c4";
    if (state.hasValue) {
      borderBottomValue = "2px solid #34394f";
    } else if (state.selectProps.menuIsOpen) {
      borderBottomValue = "none";
    }
    return {
      ...baseStyles,
      border: state.hasValue ? "2px solid #34394f" : "2px solid #c4c4c4",
      borderBottom: borderBottomValue,
      borderRadius: state.selectProps.menuIsOpen ? "8px 8px 0 0" : "8px",
      height: "3.5em",
      boxShadow: "none",
      outline: "none",
      "&:hover": {
        border: state.hasValue ? "2px solid #34394f" : "2px solid #c4c4c4",
        borderBottom: borderBottomValue,
      },
    };
  },
  dropdownIndicator: (
    baseStyles: CSSObjectWithLabel,
    state: DropdownIndicatorProps<
      {
        value: string;
        label: string;
      },
      false,
      GroupBase<{
        value: string;
        label: string;
      }>
    >
  ) => ({
    ...baseStyles,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen
      ? "rotate(180deg)"
      : "rotate (0deg)",
  }),
  placeholder: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "#C6C6C6",
    paddingLeft: "8px",
    fontSize: "1rem",
  }),
  menu: (
    baseStyles: CSSObjectWithLabel,
    state: MenuProps<
      {
        value: string;
        label: string;
      },
      false,
      GroupBase<{
        value: string;
        label: string;
      }>
    >
  ) => ({
    ...baseStyles,
    border: state.hasValue ? "2px solid #34394f" : "2px solid #c4c4c4",
    borderTop: "none",
    borderRadius: "0px 0px 8px 8px",
    marginTop: "-8px",
    padding: "0px 5px",
    boxShadow: "none",
  }),
  option: (
    baseStyles: CSSObjectWithLabel,
    state: OptionProps<
      {
        value: string;
        label: string;
      },
      false,
      GroupBase<{
        value: string;
        label: string;
      }>
    >
  ) => ({
    ...baseStyles,
    color: "#34394f",
    padding: "20px 12px",
    fontSize: "1rem",
    borderRadius: "8px",
    backgroundColor: state.isFocused ? "white" : "white",
    "&:hover": {
      backgroundColor: "#E8E8E8",
      fontWeight: "500",
    },
  }),
  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    paddingLeft: "8px",
    color: "#34394f",
    fontSize: "1rem",
  }),
};

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type selectedOptionType = {
  selectedOption: Option | null;
};

const CategorySelect = () => {
  const [category, setCategory] = useState<selectedOptionType>({
    selectedOption: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const placeholder = isOpen ? "Select category" : "Categories";

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Select
        value={category.selectedOption}
        isSearchable={false}
        placeholder={placeholder}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        options={options}
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
        onChange={(category: Option | null) => {
          setCategory({ selectedOption: category });
        }}
      />
    </div>
  );
};

export default CategorySelect;
