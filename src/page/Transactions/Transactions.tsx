import TransactionListFilter from '@components/template/transactions/TransactionListFilter/TransactionListFilter'
import TransactionsHeader from '@components/template/transactions/TransactionsHeader/TransactionsHeader'
import React from 'react'

const Transactions:React.FC = ()=>{
  return (
    <>
    <TransactionsHeader/>
    <TransactionListFilter/>
    </>
  )
}

export default Transactions