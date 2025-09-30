import TransactionListFilter from '@components/template/transactions/TransactionListFilter/TransactionListFilter'
import TransactionsHeader from '@components/template/transactions/TransactionsHeader/TransactionsHeader'
import MetaTag from '@hooks/metaTag'
import React from 'react'

const Transactions:React.FC = ()=>{
  return (
    <>
    <MetaTag title='Transactions' description='A bank management project for the transactions department'/>
    <TransactionsHeader/>
    <TransactionListFilter/>
    </>
  )
}

export default Transactions