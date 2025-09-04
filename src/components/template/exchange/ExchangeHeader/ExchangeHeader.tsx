import React from 'react';
import { useTranslation } from 'react-i18next';

const ExchangeHeader:React.FC = ()=>{
  const {t} = useTranslation();
  return (
    <div>
        <h1 className="title">{t('Currency Exchange')}</h1>
        <p className="paraph">{t('Exchange currencies at competitive rates')}</p>
    </div>
  )
}

export default ExchangeHeader