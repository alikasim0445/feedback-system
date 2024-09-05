import React from "react";
import { ReactCountryFlag } from "react-country-flag";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

const PhoneInputWithFlag = ({ countryCode, value, onChange }) => {
  const handlePhoneChange = (newValue) => {
    // Handle the change event of the phone number input
    onChange(newValue);
  };

  return (
    <div>
      <ReactCountryFlag countryCode={countryCode} />
      <PhoneInput
        inputProps={{
          name: "phone",
          id: "phone",
          placeholder: "+1234567890",
        }}
        country={countryCode}
        value={value}
        onChange={handlePhoneChange}
        isValid={isValidPhoneNumber}
      />
    </div>
  );
};

export default PhoneInputWithFlag;
