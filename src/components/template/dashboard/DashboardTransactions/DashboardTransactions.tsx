import { CreditCard } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DashboardTransactions:React.FC = () => {
  const {t} = useTranslation()
  return (
    <div className="rounded-lg border border-border bg-white dark:bg-primary-100 text-primary dark:text-white shadow-sm ">
        <div className="flex flex-row items-center justify-between space-y-1 5 p-6">
            <h3 className="text-2xl font-interBold rtl:font-danaBold leading-none tracking-tight dark:text-white">{t('Recent Transactions')}</h3>
            <Link to='/Transactions' className='btn primary w-[100px] font-interRegular rtl:font-danaRegular'>{t('View All')}</Link>
        </div>
        <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border dark:border-muted last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-100 flex items-center justify-center">
                      <CreditCard className='h-5 w-5 text-muted'/>
                    </div>
                    <div>
                      <p className="block font-interRegular text-primary dark:text-white">Online Purchase - Amazon</p>
                      <p className="block text-sm text-muted">Today, 2:30 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-interRegular">$125.99</p>
                    <p className="text-sm text-muted">USD</p>
                  </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border dark:border-muted last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-100 flex items-center justify-center">
                      <CreditCard className='h-5 w-5 text-muted'/>
                    </div>
                    <div>
                      <p className="block font-interRegular text-primary dark:text-white">Online Purchase - Amazon</p>
                      <p className="block text-sm text-muted">Today, 2:30 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-interRegular">$125.99</p>
                    <p className="text-sm text-muted">USD</p>
                  </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border dark:border-muted last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-100 flex items-center justify-center">
                      <CreditCard className='h-5 w-5 text-muted'/>
                    </div>
                    <div>
                      <p className="block font-interRegular text-primary dark:text-white">Online Purchase - Amazon</p>
                      <p className="block text-sm text-muted">Today, 2:30 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-interRegular">$125.99</p>
                    <p className="text-sm text-muted">USD</p>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardTransactions