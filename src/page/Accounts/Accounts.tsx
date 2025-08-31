import AccountsHeader from '@components/template/accounts/AccountsHeader/AccountsHeader'
import AccountsTable from '@components/template/accounts/AccountsTable/AccountsTable'
import React from 'react'

const Accounts:React.FC = ()=>{
  return (
    <div className="space-y-6">
        <AccountsHeader/>
        <AccountsTable/>
    </div>
  )
}

export default Accounts