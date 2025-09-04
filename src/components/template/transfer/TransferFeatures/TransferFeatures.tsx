import { ArrowRight, Clock, Shield } from 'lucide-react';
import React from 'react';

const TransferFeatures:React.FC = ()=>{
  return (
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle">Transfer Feature</h3>
        </div>
        <div className="cardContent mt-4">
            <div className="flex items-center gap-3 mb-2">
                <Shield className='h-5 w-5 text-success'/>
                <div>
                    <p className='font-interRegular rtl:font-danaRegular text-lg'>Secure Transfer</p>
                    <p className='text-muted'>Bank-grade encryption</p>
                </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
                <Clock className='h-5 w-5 text-secondary'/>
                <div>
                    <p className='font-interRegular rtl:font-danaRegular text-lg'>Instant Processing</p>
                    <p className='text-muted'>Immediate</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <ArrowRight className='h-5 w-5 text-success'/>
                <div>
                    <p className='font-interRegular rtl:font-danaRegular text-lg'>Transfer Tracking</p>
                    <p className='text-muted'>Real-time status updates</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransferFeatures