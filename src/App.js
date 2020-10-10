import React,{useState, useEffect}from "react";
import styled from "@emotion/styled";
import image from "./cryptomonedas.png";
import Form from "./components/Form";
import Summary from './components/Summary';
import axios from 'axios'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [coin, saveCoin] = useState('');
  
  const [ecoin, saveECoin] = useState('');

  const [change, saveChange] = useState({});


  useEffect(()=>{

    const ApiRequest = async()=>{
      if(coin==='') return;
      // Consultando el api

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ecoin}&tsyms=${coin}`;

      const endpoint = await axios.get(url);

      saveChange(endpoint.data.DISPLAY[ecoin][coin]);
    }
    ApiRequest();
  }, [coin, ecoin])

  return (
    <Container>
      <div>
        <Image src={image} alt="Crypto image" />
      </div>
      <div>
        <Heading>Cotiza Criptodivisas al instante</Heading>
        <Form
          guardarMoneda={saveCoin}
          guardarCriptoMoneda={saveECoin}
        />
        <Summary change={change}/>
      </div>
    </Container>
  );
}

export default App;
