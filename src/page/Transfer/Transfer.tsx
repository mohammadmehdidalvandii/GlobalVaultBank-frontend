import TransferHeader from '@components/template/transfer/TransferHeader/TransferHeader';
import { Send } from 'lucide-react';
import React from 'react';


const Transfer:React.FC =   ()=>{
  return (
    <>
    <TransferHeader/>
    <div className="grid grid-col-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            container
        </div>
        <div>
            container
        </div>
    </div>
    </>
  )
}

export default Transfer