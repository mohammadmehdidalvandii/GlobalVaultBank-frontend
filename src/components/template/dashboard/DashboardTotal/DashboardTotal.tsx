import { getAccount } from '@services/accountServices';
import { getCustomer } from '@services/customerService';
import { getDailyReport } from '@services/dailyReportServices';
import { useQuery } from '@tanstack/react-query';
import { showError } from '@utils/Toasts';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardTotal:React.FC =  ()=>{
    const {t} = useTranslation();
 const {

    data: accounts = [],
    isLoading: accountsLoading,
    isError: accountsError,
    error: accountsErrorMessage,
  } = useQuery({
    queryKey: ['accounts'],
    queryFn: getAccount,
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: customers = [],
    isLoading: customersLoading,
    isError: customersError,
    error: customersErrorMessage,
  } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomer,
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: dailyReport= [],
    isLoading: dailyReportLoading,
    isError: dailyReportError,
    error: dailyReportErrorMessage,
  } = useQuery({
    queryKey:['dailyReports'],
    queryFn:getDailyReport,
    staleTime : 1000 * 60 * 5
  })

  if (accountsLoading || customersLoading || dailyReportLoading) return <p className='text_loading'>Loading...</p>;

  
  if (accountsError) showError(`${(accountsErrorMessage as Error).message}`);
  if (customersError) showError(`${(customersErrorMessage as Error).message}`);
  if (dailyReportError) showError(`${(dailyReportErrorMessage as Error).message}`);


  return (
    <div className="rounded-lg  bg-card text-card-foreground shadow-sm gradient_hero text-white border-0">
        <div className="flex flex-col items-center p-6 ">
            <div className="text-center">
                <p className="text-base mb-2 ">{t('Total Portfolio Under Management (USD)')}</p>
                <p className="text-4xl font-danaBold font-bold mb-4">${dailyReport[0]?.totalVolume}</p>
            </div>
            <div className="flex justify-center gap-4">
                <div className="text-center">
                    <p className="text-2xl font-danaBold font-bold">{customers.length}</p>
                    <p className="text-base font-danaBold font-bold">{t('Active Customer')}</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-danaBold font-bold">{accounts.length}</p>
                    <p className="text-base font-danaBold font-bold">{t('Total Accounts')}</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-danaBold font-bold">{dailyReport[0]?.totalTransactions}</p>
                    <p className="text-base font-danaBold font-bold">{t('Total Transfer')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardTotal