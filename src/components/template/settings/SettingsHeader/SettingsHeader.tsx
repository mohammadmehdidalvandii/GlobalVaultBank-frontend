import React from 'react';
import { useTranslation } from 'react-i18next';

const SettingsHeader:React.FC  = ()=>{
  const {t} = useTranslation()
  return (
    <div>
        <h3 className="title">{t('Employee Settings')}</h3>
        <p className="paraph">{t('Manage employee account, system preferences and security settings')}</p>
    </div>
  )
}

export default SettingsHeader