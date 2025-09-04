import React from 'react';
import { useTranslation } from 'react-i18next';

const TransferHeader:React.FC =  ()=>{
  const {t} = useTranslation();
  return (
    <div>
        <h1 className="title">{t('Transfer Money')}</h1>
        <p className="paraph">{t('Send money between or to external recipients')}</p>
    </div>
  )
}

export default TransferHeader