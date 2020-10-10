import React from 'react';
import styled from '@emotion/styled';

const SummaryDiv = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`;

const Stats = styled.p`
  font-size: 18px;
  span{
    font-weight: bold;
  }
`;

const Change = styled.p`
  font-size: 30px;
  span{
    font-weight: bold;
  }
`;

const PosVariation = styled.span`
  color: #0ee848;
`;
const NegVariation = styled.span`
  color:#e30b16;
`;


const Summary = ({change}) => {
  if(Object.keys(change).length === 0) return null;
  return ( 
  <SummaryDiv>
    <Change>Cambio(<span>1 {change.FROMSYMBOL}</span>): <span>{change.PRICE}</span></Change>
    <Stats>Precio más alto del dia: <span>{change.HIGHDAY}</span></Stats>
    <Stats>Precio más bajo del dia: <span>{change.LOWDAY}</span></Stats>
    <Stats>Variación de las ultimas 24h: {change.CHANGEPCT24HOUR > 0 ? <PosVariation>{change.CHANGEPCT24HOUR} ptos.</PosVariation> : <NegVariation>{change.CHANGEPCT24HOUR} ptos.</NegVariation>}</Stats>
    <Stats>Última Actualización: <span>{change.LASTUPDATE}</span></Stats>
  </SummaryDiv> 
  );
}
 
export default Summary;