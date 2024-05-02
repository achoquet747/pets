import {Select, MenuItem } from "@mui/material";
import { FC } from "react";
import { TypeAnimal } from "../../../../enums/animals";

interface SelectTypeProps {
  value: string;
  onChange:any;
  error: boolean
}

const options = [
  {
    label: "Cat",
    value: TypeAnimal.CAT,
  },
  {
    label: "Dog",
    value: TypeAnimal.DOG,
  },
];

const SelectType: FC<SelectTypeProps> = ({ value, onChange, error }) => {

  return (
    <>
    
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Type"
          placeholder="Type"
          onChange={onChange}
          error={error}
        >
          {options.map(
            (option: { label: string; value: TypeAnimal }, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            )
          )}
        </Select>
      
    </>
  );
};

export default SelectType;
