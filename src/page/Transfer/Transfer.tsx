import TransferFeatures from '@components/template/transfer/TransferFeatures/TransferFeatures';
import TransferForm from '@components/template/transfer/TransferForm/TransferForm';
import TransferHeader from '@components/template/transfer/TransferHeader/TransferHeader';
import TransferSummary from '@components/template/transfer/TransferSummary/TransferSummary';
import { Send } from 'lucide-react';
import React from 'react';


const Transfer:React.FC =   ()=>{
  return (
    <>
    <TransferHeader/>
    <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <TransferForm/>
        </div>
        <div>
            <TransferSummary/>
            <TransferFeatures/>
        </div>
    </div>
    </>
  )
}

export default Transfer