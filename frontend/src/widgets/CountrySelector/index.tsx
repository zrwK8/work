import { useMemo } from "react";
import { Select } from "antd";
import countryList from "react-select-country-list";

const CountrySelector = ({ onChange, value }: any) => {
  const options = useMemo(() => countryList().getData(), []);

  return <Select options={options} value={value} onChange={onChange} />;
};

export default CountrySelector;
