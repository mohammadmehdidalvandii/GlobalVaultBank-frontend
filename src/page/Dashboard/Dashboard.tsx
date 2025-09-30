import HeaderDashboard from '@components/template/dashboard/HeaderDashboard/HeaderDashboard'
import DashboardTotal from '@components/template/dashboard/DashboardTotal/DashboardTotal'
import React from 'react'
import DashboardTransactions from '@components/template/dashboard/DashboardTransactions/DashboardTransactions'
import MetaTag from '@hooks/metaTag'

const Dashboard:React.FC = ()=>{
  return (
    <div className='space-y-6 '>
      <MetaTag title='Dashboard' description='A bank management project for the dashboard department'/>
      <HeaderDashboard/>
      <DashboardTotal/>
      <DashboardTransactions/>
    </div>
  )
}

export default Dashboard