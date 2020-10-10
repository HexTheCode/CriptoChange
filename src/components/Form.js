import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from './Error';
import useCoin from "../hooks/useCoin";
import useCriptoCoin from "../hooks/useCriptoCoin";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({guardarMoneda, guardarCriptoMoneda}) => {
  // State del listado criptomonedas

  const [listcripto, saveListCripto] = useState([]);
  const [error, saveError] = useState(false);

  const COINS = [
    { cod: "USD", name: "Dolar Estadounidense" },
    { cod: "MXN", name: "Peso Mexicano" },
    { cod: "EUR", name: "Euro" },
    { cod: "GBP", name: "Libra Esterlina" },
  ];

  const [coin, Coins, updateCoin] = useCoin("Divisas:", "", COINS);

  const [ecoins, CriptoCoins] = useCriptoCoin(
    "Elige criptomoneda",
    "",
    listcripto
  );

  useEffect(() => {
    const apiRequest = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const endpoint = await axios.get(url);

      saveListCripto(endpoint.data.Data);
    };

    apiRequest();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (coin === "" || ecoins === "") {
      saveError(true);
      return;
    }
    saveError(false);

    guardarMoneda(coin);
    guardarCriptoMoneda(ecoins)
  };

  return (
    <form onSubmit={onSubmit}>
      {error ? <Error  message={"Hay un error"}/> : null}
      <Coins />
      <CriptoCoins />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
