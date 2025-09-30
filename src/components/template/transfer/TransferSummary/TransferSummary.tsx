import React from 'react';
import { useTranslation } from 'react-i18next';


const TransferSummary:React.FC = ()=>{
    const {t , i18n} =useTranslation()
  return (
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h2 className="cardTitle">{t('Transfer Summary')}</h2>
        </div>
        <div className="cardContent mt-4">
            <div className={`flex justify-between ${i18n.language === 'fa' ? 'mb-4':""}`}>
                <span className='text-muted font-interBold rtl:font-danaBold text-xl'>{t('Transfer Amount')}</span>
                <span className='font-interRegular rtl:font-danaRegular text-lg dark:text-white'>0.00</span>
            </div>
            <div className="flex justify-between">
                <span className='text-muted font-interBold rtl:font-danaBold text-xl'>{t('Transfer fee')}</span>
                <span className='font-interRegular rtl:font-danaRegular text-lg dark:text-white'>0.00</span>
            </div>
            <div className="flex justify-between mt-8">
                <span className=' font-interBold rtl:font-danaBold text-2xl text-primary dark:text-white'>{t('Total')}</span>
                <span className='font-interRegular rtl:font-danaRegular text-lg dark:text-white'>0.00</span>
            </div>
        </div>
    </div>
  )
}

export default TransferSummary