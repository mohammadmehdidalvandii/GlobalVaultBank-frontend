import AccountDetailsModel from '@components/Models/AccountDetailsModel'
import AccountSettingsModel from '@components/Models/AccountSettingsModel'
import { getAccount } from '@services/accountServices'
import { useQuery } from '@tanstack/react-query'
import { showError } from '@utils/Toasts'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {AccountProps}  from "../../../../types/account"

const AccountsTable:React.FC = () => {
    const {t}=useTranslation();
    const [searchItem , setSearchItem] = useState<string>('');

      const {data=[] , isLoading , isError , error} = useQuery({
    queryKey:['accounts'],
    queryFn:getAccount,
    staleTime:1000 * 60 * 5,
  });

  if(isLoading) return <p className='text_loading'>Loading...</p>
  if(isError){
    showError(`${error.message}`)
  }

  const filterAccounts = data.filter((account:AccountProps)=>{
    return (
        account.accountName.includes(searchItem.toLowerCase())||
        account.accountNumber.includes(searchItem.toLowerCase())||
        account.currency.includes(searchItem.toUpperCase())||
        account.type.includes(searchItem.toLowerCase())
    )
  })

  return (
    <div className="space-y-4">
        <div className="relative">
            <search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted h-4 w-4'/>
            <input type="text" className="input_style" placeholder={t('Search customer , account numbers , types, or currency')}
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}
            />
        </div>
        {/* table */}
        <div className="rounded-md border border-border bg-white dark:bg-primary">
            <div className="container_table">
                <table className="table">
                    <thead className='tableHeader'>
                        <tr>
                        <th className='tableHead'>{t('Customer & Account')}</th>
                        <th className='tableHead'>{t('Type')}</th>
                        <th className='tableHead'>{t('Account Number')}</th>
                        <th className='tableHead'>{t('Balance')}</th>
                        <th className='tableHead'>{t('Change')}</th>
                        <th className='tableHead'>{t('Interest Rate')}</th>
                        <th className='tableHead text-right'>{t('Actions')}</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {filterAccounts.map((account:AccountProps)=>(
                        <tr className="tableRow" key={account.id}>
                            
                            <td className="tableCall">
                                <div>
                                    <p className="font-interBold rtl:font-danaBold">{account.accountName} - {account.type}</p>
                                    <p className="text-muted">{account.currency} Account</p>
                                </div>
                            </td>
                            <td className="tableCall">
                                <div>
                                 <div className="badge badge_default">{account.type}</div>
                                </div>
                            </td>
                            <td className="tableCall">
                                  {account.accountNumber}
                            </td>
                            <td className="tableCall">
                                <div className='font-interBold rtl:font-danaBold'>
                                    {account.balance}
                                    <br />
                                    {account.currency}
                                </div>
                            </td>
                            <td className="tableCall">
                                {/* ? : */}
                                <div className={`flex items-center gap-1 `}>
                                    +$1,240.3(+5.2%)
                                </div>
                            </td>
                              <td className="tableCall">
                                <span className="font-interBold rtl:font-danaBold text-success">{account.interestRate} APY</span>
                            </td>
                              <td className="tableCall">
                                <div className='flex gap-2 justify-end'>
                                    <AccountDetailsModel accounts={account}/>
                                    <AccountSettingsModel accounts={account}/>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AccountsTable