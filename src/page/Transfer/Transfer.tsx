import TransferContent from '@components/template/transfer/TransferContent/TransferContent';
import TransferHeader from '@components/template/transfer/TransferHeader/TransferHeader';
import MetaTag from '@hooks/metaTag';
import React from 'react';


const Transfer:React.FC =   ()=>{
  return (
    <>
    <MetaTag title='Transfer' description='A bank management project for the transfer department'/>
    <TransferHeader/>
    <TransferContent/>
    </>
  )
}

export default Transfer