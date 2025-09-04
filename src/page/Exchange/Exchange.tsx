import ExchangeConversion from '@components/template/exchange/ExchangeConversion/ExchangeConversion';
import ExchangeHeader from '@components/template/exchange/ExchangeHeader/ExchangeHeader';
import React from 'react';

const Exchange:React.FC = ()=>{
  return (
    <>
    <ExchangeHeader/>
    <ExchangeConversion/>
    </>
  )
}

export default Exchange