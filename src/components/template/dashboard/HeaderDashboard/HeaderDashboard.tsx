import React, { lazy, Suspense } from 'react'
const CustomerSearchModel = lazy(()=>import('@components/Models/CustomerSearchModel'))
const NewCustomerModel = lazy(()=>import('@components/Models/NewCustomerModel'))
import { useTranslation } from 'react-i18next'

const HeaderDashboard:React.FC  = ()=>{
  const {t} = useTranslation();
  return (
    <div className='flex items-center justify-between flex-wrap  bg-white dark:bg-primary p-4'>
        <div>
            <h1 className="title">{t('Employee Dashboard')}</h1>
            <p className="paraph">{t("Bank employee portal - Manage customers and accounts")}</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Suspense fallback={<p className='text_loading'>Loading...</p>}>
                <CustomerSearchModel/>
          </Suspense>
          <Suspense fallback={<p className='text_loading'>Loading...</p>}>
                <NewCustomerModel/>
          </Suspense>
        </div>
    </div>
  )
}

export default HeaderDashboard