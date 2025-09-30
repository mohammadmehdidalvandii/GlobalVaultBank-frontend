import NewAccountModel from '@components/Models/NewAccountModel'
import React from 'react';
import { useTranslation } from 'react-i18next';

const AccountsHeader:React.FC = ()=>{
  const {t} = useTranslation();
  return (
    <div className="flex justify-between items-center bg-white dark:bg-primary p-4">
        <div>
            <h1 className="title">{t('Customer Accounts')}</h1>
            <p className="paraph">{t('Manage customer account and monitor balances')}</p>
        </div>
        <NewAccountModel/>
    </div>
  )
}

export default AccountsHeader