import React from 'react';
import { useTranslation } from 'react-i18next';

const SettingsHeader:React.FC  = ()=>{
  const {t} = useTranslation()
  return (
    <div className=' bg-white dark:bg-primary p-4'>
        <h1 className="title">{t('Employee Settings')}</h1>
        <p className="paraph">{t('Manage employee account, system preferences and security settings')}</p>
    </div>
  )
}

export default SettingsHeader