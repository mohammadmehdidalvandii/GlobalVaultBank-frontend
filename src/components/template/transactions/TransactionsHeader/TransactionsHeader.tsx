import { Download } from 'lucide-react'
import React from 'react'

const TransactionsHeader:React.FC = ()=>{
  return (
    <div className="flex justify-between items-center">
        <div>
            <h1 className="title">Transaction Management</h1>
            <p className="paraph">Monitor and manage customer transactions</p>
        </div>
        <button className="btn primary w-[140px]">
            <Download className='h-4 w-4 mr-2'/>
            Export Report
        </button>
    </div>
  )
}

export default TransactionsHeader