import { Search, ShoppingCart } from 'lucide-react';
import React, { useMemo, useState , lazy , Suspense , useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getAllTransactions } from '@services/transactionsServivces';
import { showError } from '@utils/Toasts';
import { transactionProps } from '../../../../types/transaction';

const TransactionDetailsModel = lazy(()=>import('@components/Models/TransactionDetailsModel'))

const TransactionListFilter:React.FC = ()=>{
    const {t} = useTranslation();
    const [searchItem , setSearchItem] = useState<string>("");
    const {data =[] , isError , error , isLoading} = useQuery({
  queryKey:['transactions'],
  queryFn:getAllTransactions,
  staleTime:1000 * 60 * 5
});

useEffect(() => {
  if (isError && error) {
    showError(`${error}`);
  }
}, [isError, error]);

const filterTransaction = useMemo(() => {
  return data.filter((transaction: transactionProps) =>
    transaction.description.toLowerCase().includes(searchItem.toLowerCase())
  );
}, [data, searchItem]);

if(isLoading) return <p className='text_loading'>Loading...</p>
  return (
    <>
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h1 className="cardTitle">{t('Filter Transactions')}</h1>
        </div>
        <div className="cardContent">
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1">
                    <div className="relative">
                        <Search className='absolute  left-3 top-3 w-4 h-4 text-muted'/>
                        <input type="text" className="input_style pl-10" placeholder={t('Search transactions...')}
                        value={searchItem}
                        onChange={(e)=>setSearchItem(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h2 className="cardTitle">{t('Recent Transactions')}</h2>
        </div>
        <div className="cardContent">
            <div className="space-y-4">
                {data.length === 0 ? ( <span className='text_alert mt-2'>{t('There are no transactions.')}</span>):(
                    filterTransaction.map((transaction:transactionProps)=>(
                        <Suspense fallback={<p className='text_loading'>Loading...</p>}>
                                 <TransactionDetailsModel 
                        key={transaction.id}
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
                        </Suspense>
                    ))
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default TransactionListFilter