import { ChevronDown, Search, ShoppingCart } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import React from 'react'
import TransactionDetailsModel from '@components/Models/TransactionDetailsModel';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getAllTransactions } from '@services/transactionsServivces';
import { showError } from '@utils/Toasts';
import { transactionProps } from '@types/transaction';

const TransactionListFilter:React.FC = ()=>{
    const {t} = useTranslation();
    const {data =[] , isError , error , isLoading} = useQuery({
  queryKey:['transactions'],
  queryFn:getAllTransactions,
  staleTime:1000 * 60 * 5
});


if(isLoading) return <p>Loading...</p>
if(isError && error){
  showError(`${error}`)
}
  return (
    <>
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle">{t('Filter Transactions')}</h3>
        </div>
        <div className="cardContent">
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1">
                    <div className="relative">
                        <Search className='absolute  left-3 top-3 w-4 h-4 text-muted'/>
                        <input type="text" className="input_style pl-10" placeholder={t('Search transactions...')}/>
                    </div>
                </div>
                    <Select.Root defaultValue={t('Category')}>
                    <Select.Trigger className='select_trigger md:w-48'>
                        <Select.Value placeholder={t('Category')} className='text-primary dark:text-white'/>
                        <Select.Icon>
                            <ChevronDown/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className='select_content'>
                            <Select.Viewport className='select_viewPort'>
                                <Select.Item value={t('Category')} className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>{t('Category')}</Select.ItemText>
                                </Select.Item>
                                <Select.Item value={t('Active')} className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>{t('Active')}</Select.ItemText>
                                </Select.Item>
                                <Select.Item value={t('Suspended')} className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>{t('Suspended')}</Select.ItemText>
                                </Select.Item>
                                <Select.Item value={t('Frozen')} className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>{t('Frozen')}</Select.ItemText>
                                </Select.Item>
                                <Select.Item value={t('Closed')} className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>{t('Closed')}</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
                <Select.Root defaultValue={t('All')}>
                    <Select.Trigger className='select_trigger md:w-48'>
                        <Select.Value placeholder={t('Currency')}/>
                        <Select.Icon>
                            <ChevronDown/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className='select_content'>
                            <Select.Viewport className='select_viewPort'>
                                <Select.Item value={t('All')} className='select_item'>
                                    <Select.ItemText>{t('All')}</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='USD' className='select_item'>
                                    <Select.ItemText>USD</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='EUR' className='select_item'>
                                    <Select.ItemText>EUR</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='GBP' className='select_item'>
                                    <Select.ItemText>GBP</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
        </div>
    </div>
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle">{t('Recent Transactions')}</h3>
        </div>
        <div className="cardContent">
            <div className="space-y-4">
                {data.length === 0 ? ( <span>There are no transactions.</span>):(
                    data.map((transaction:transactionProps)=>(
                        <TransactionDetailsModel 
                        trigger={
                            <div className='flex items-center justify-between py-4 border-b border-muted last:border-0 hover:bg-muted/30
                            transition-colors rounded-lg px-2 cursor-pointer mt-4
                            '>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                        <ShoppingCart className='h-6 w-6 text-muted'/>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-interRegular rtl:font-danaRegular">{transaction.description}</p>
                                        <div className="flex items-center gap-4 text-muted">
                                            <span>{new Date(transaction.createdAt).toLocaleDateString()}</span>
                                            <span>{new Date(transaction.createdAt).toLocaleTimeString()}</span>
                                            <span className='capitalize'>Shopping</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end gap-1">
                                    <p className="font-interBold rtl:font-danaRegular text-lg">${transaction.amount}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-muted">{transaction.currency}</span>
                                        <span className=" py-1 px-2 text-success">{transaction.status}</span>
                                    </div>
                                </div>
                            </div>
                        }
                        transactions={transaction}
                        />
                    ))
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default TransactionListFilter