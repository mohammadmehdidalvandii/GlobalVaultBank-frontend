import ExchangeConversion from '@components/template/exchange/ExchangeConversion/ExchangeConversion';
import ExchangeHeader from '@components/template/exchange/ExchangeHeader/ExchangeHeader';
import MetaTag from '@hooks/metaTag';
import React from 'react';

const Exchange:React.FC = ()=>{
  return (
    <>
    <MetaTag title='Exchange' description='A bank management project for the exchange department'/>
    <ExchangeHeader/>
    <ExchangeConversion/>
    </>
  )
}

export default Exchange