import AccountsHeader from '@components/template/accounts/AccountsHeader/AccountsHeader'
import AccountsTable from '@components/template/accounts/AccountsTable/AccountsTable'
import React from 'react'
import MetaTag from '@hooks/metaTag'

const Accounts:React.FC = ()=>{
  return (
    <div className="space-y-6">
      <MetaTag title='Account' description='A bank management project for the accounts department'/>
        <AccountsHeader/>
        <AccountsTable/>
    </div>
  )
}

export default Accounts