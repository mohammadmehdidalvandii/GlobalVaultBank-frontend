import { showInfo } from '@utils/Toasts';
import { Download } from 'lucide-react'
import React from 'react';
import { useTranslation } from 'react-i18next';

const TransactionsHeader:React.FC = ()=>{
  const {t, i18n} = useTranslation();

  return (
    <div className="flex justify-between flex-wrap items-center  bg-white dark:bg-primary p-4">
        <div>
            <h1 className="title">{t('Transaction Management')}</h1>
            <p className="paraph">{t('Monitor and manage customer transactions')}</p>
        </div>
        <button className={`btn primary ${i18n.language === 'esp' ? 'w-[200px]':'w-[140px]'} rtl:w-[160px] rtl:gap-2 mt-2 md:mt-0`}
        onClick={()=>showInfo('Developing')}
        >
            <Download className='h-4 w-4 mr-2'/>
            {t('Export Report')}
        </button>
    </div>
  )
}

export default TransactionsHeader