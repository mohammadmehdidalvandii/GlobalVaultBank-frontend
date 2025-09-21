import CustomerSearchModel from '@components/Models/CustomerSearchModel'
import NewAccountModel from '@components/Models/NewAccountModel'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HeaderDashboard:React.FC  = ()=>{
  const {t} = useTranslation();
  return (
    <div className='flex items-center justify-between flex-wrap '>
        <div>
            <h1 className="title">{t('Employee Dashboard')}</h1>
            <p className="paraph">{t("Bank employee portal - Manage customers and accounts")}</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
                <CustomerSearchModel/>
                <NewAccountModel/>
        </div>
    </div>
  )
}

export default HeaderDashboard