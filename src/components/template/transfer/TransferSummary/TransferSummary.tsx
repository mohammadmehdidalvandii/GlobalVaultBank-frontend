import React from 'react';


const TransferSummary:React.FC = ()=>{
  return (
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle">Transfer Summary</h3>
        </div>
        <div className="cardContent mt-4">
            <div className="flex justify-between">
                <span className='text-muted font-interBold rtl:font-danaBold text-xl'>Transfer Amount</span>
                <span className='font-interRegular rtl:font-danaRegular text-lg dark:text-white'>0.00</span>
            </div>
            <div className="flex justify-between">
                <span className='text-muted font-interBold rtl:font-danaBold text-xl'>Transfer fee</span>
                <span className='font-interRegular rtl:font-danaRegular text-lg dark:text-white'>0.00</span>
            </div>
            <div className="flex justify-between mt-8">
                <span className=' font-interBold rtl:font-danaBold text-2xl text-primary dark:text-white'>Total</span>
                <span className='font-interRegular rtl:font-danaRegular text-lg dark:text-white'>0.00</span>
            </div>
        </div>
    </div>
  )
}

export default TransferSummary