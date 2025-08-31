import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardTotal:React.FC =  ()=>{
    const {t} = useTranslation()
  return (
    <div className="rounded-lg  bg-card text-card-foreground shadow-sm gradient_hero text-white border-0">
        <div className="flex flex-col items-center p-6 ">
            <div className="text-center">
                <p className="text-base mb-2 ">{t('Total Portfolio Under Management (USD)')}</p>
                <p className="text-4xl font-danaBold font-bold mb-4">$62,036.325</p>
            </div>
            <div className="flex justify-center gap-4">
                <div className="text-center">
                    <p className="text-2xl font-danaBold font-bold">127</p>
                    <p className="text-base font-danaBold font-bold">{t('Active Customer')}</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-danaBold font-bold">342</p>
                    <p className="text-base font-danaBold font-bold">{t('Total Accounts')}</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-danaBold font-bold">32</p>
                    <p className="text-base font-danaBold font-bold">{t('Pending Reviews')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardTotal