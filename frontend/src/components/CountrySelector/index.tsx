import React, { useState, useMemo } from "react";
import { Select } from "antd";
import countryList from "react-select-country-list";


const CountrySelector = () => {
  const [value, setValue] = useState<string>("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: React.SetStateAction<string>) => {
    setValue(value);
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default CountrySelector;