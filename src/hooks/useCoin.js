import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, startState, options) => {
  // Hook State

  const [state, updateState] = useState(startState);

  const Coins = () => (
    <Fragment>
      <Label id="label">{label}</Label>
      <Select
        onChange={(e) => updateState(e.target.value)}
        htmlFor="label"
        value={state}
      >
        <option value="">-- Seleccionar --</option>
        {options.map((option) => (
          <option key={option.cod} value={option.cod}>
            {option.name}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  // Return state, Select and updateState
  return [state, Coins, updateState];
};

export default useCoin;
