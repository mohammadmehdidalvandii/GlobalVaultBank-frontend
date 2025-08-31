import NewAccountModel from '@components/Models/NewAccountModel'
import React from 'react'

const AccountsHeader:React.FC = ()=>{
  return (
    <div className="flex justify-between items-center">
        <div>
            <h1 className="title">Customer Accounts</h1>
            <p className="paraph">Manage customer account and monitor balances</p>
        </div>
        <NewAccountModel/>
    </div>
  )
}

export default AccountsHeader