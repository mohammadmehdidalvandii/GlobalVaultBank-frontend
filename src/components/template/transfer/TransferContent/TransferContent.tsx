import React from 'react';
import TransferForm from '../TransferForm/TransferForm';
import TransferSummary from '../TransferSummary/TransferSummary';
import TransferFeatures from '../TransferFeatures/TransferFeatures';

const TransferContent:React.FC = ()=>{
  return (
      <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <TransferForm/>
        </div>
        <div>
            <TransferSummary/>
            <TransferFeatures/>
        </div>
    </div>
  )
}

export default TransferContent