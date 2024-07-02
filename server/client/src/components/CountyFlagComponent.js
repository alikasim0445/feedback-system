import React from "react";
import { CountryFlag } from "react-country-flag";

const CountryFlagComponent = ({ countryCode }) => {
  return (
    <div>
      <CountryFlag countryCode={countryCode} />
      <span>{countryCode}</span>
    </div>
  );
};

export default CountryFlagComponent;
