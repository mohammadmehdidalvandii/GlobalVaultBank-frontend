import React from 'react';
import TransferForm from '../TransferForm/TransferForm';
import TransferSummary from '../TransferSummary/TransferSummary';
import TransferFeatures from '../TransferFeatures/TransferFeatures';
import { useQuery } from '@tanstack/react-query';
import { getAccount } from '@services/accountServices';
import { showError } from '@utils/Toasts';

const TransferContent:React.FC = ()=>{

    const {data=[], isError , error , isLoading} = useQuery({
        queryKey:['accounts'],
        queryFn:getAccount,
    })
      if(isLoading) return <p>Loading...</p>
      if(isError){
        showError(`${error.message}`)
      }
  return (
      <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <TransferForm data={data}/>
        </div>
        <div>
            <TransferSummary/>
            <TransferFeatures/>
        </div>
    </div>
  )
}

export default TransferContent