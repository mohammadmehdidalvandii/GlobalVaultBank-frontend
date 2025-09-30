import HeaderDashboard from '@components/template/dashboard/HeaderDashboard/HeaderDashboard'
import DashboardTotal from '@components/template/dashboard/DashboardTotal/DashboardTotal'
import React from 'react'
import DashboardTransactions from '@components/template/dashboard/DashboardTransactions/DashboardTransactions'

const Dashboard:React.FC = ()=>{
  return (
    <div className='space-y-6 '>
      <HeaderDashboard/>
      <DashboardTotal/>
      <DashboardTransactions/>
    </div>
  )
}

export default Dashboard