import { CreditCard } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getAllTransactions } from '@services/transactionsServivces';
import { showError } from '@utils/Toasts';
import { transactionProps } from '../../../../types/transaction';

const DashboardTransactions:React.FC = () => {
  const {t} = useTranslation();

const {data =[] , isError , error , isLoading} = useQuery({
  queryKey:['transactions'],
  queryFn:getAllTransactions,
  staleTime:1000 * 60 * 5
});

if(isLoading) return <p className='text_loading'>Loading...</p>
if(isError && error){
  showError(`${error}`)
}

  return (
    <div className="rounded-lg border border-border bg-white dark:bg-primary-100 text-primary dark:text-white shadow-sm ">
        <div className="flex flex-row items-center justify-between space-y-1 5 p-6">
            <h1 className="text-2xl font-interBold rtl:font-danaBold leading-none tracking-tight dark:text-white">{t('Recent Transactions')}</h1>
            <Link to='/Transactions' className='btn primary w-[100px] font-interRegular rtl:font-danaRegular'>{t('View All')}</Link>
        </div>
        <div className="p-6">
            <div className="space-y-4">
              {data.length === 0 ? (
                <span className='text_alert'>{t('There are no transactions.')}</span>
              ):(
                data.map((transaction:transactionProps)=>(
              <div className="flex items-center justify-between py-3 border-b border-border dark:border-muted last:border-0" key={transaction.id}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-100 flex items-center justify-center">
                      <CreditCard className='h-5 w-5 text-muted'/>
                    </div>
                    <div>
                      <p className="block font-interRegular text-primary dark:text-white">{transaction.description}</p>
                      <p className="block text-sm text-muted">
                          {new Date(transaction.createdAt).toLocaleDateString()}
                  {' , '}
                   {new Date(transaction.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-interRegular">${transaction.amount}</p>
                    <p className="text-sm text-muted">{transaction.currency}</p>
                  </div>
              </div>
                ))
              )}

            </div>
        </div>
    </div>
  )
}

export default DashboardTransactions