import { ArrowUpDown, ChevronDown, RefreshCcw, TrendingUp } from 'lucide-react';
import React from 'react';
import * as Select from '@radix-ui/react-select';

const ExchangeConversion:React.FC =  () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        <div className="lg:col-span-2">
            <div className="card p-2">
                <div className="cardHeader">
                    <h3 className="cardTitle flex items-center gap-2">
                        <ArrowUpDown className='h-5 w-5'/>
                        Currency Exchange
                    </h3>
                </div>
                <div className="cardContent">
                    <div className="mt-4">
                        <label htmlFor="">From</label>
                        <div className="flex gap-4">
                                    <Select.Root defaultValue=''>
                            <Select.Trigger className='select_trigger'>
                                <Select.Value placeholder="From Currency"/>
                                <Select.Icon>
                                    <ChevronDown/>
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content className='select_content'>
                                <Select.Viewport className='select_viewPort'>
                                    <Select.Item value='USD' className='select_item p-2'>
                                        <Select.ItemText>USD</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='EUR' className='select_item p-2'>
                                        <Select.ItemText>EUR</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='GBP' className='select_item p-2'>
                                        <Select.ItemText>GBP</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='JPY' className='select_item p-2'>
                                        <Select.ItemText>JPY</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='CHF' className='select_item p-2'>
                                        <Select.ItemText>CHF</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='CAD' className='select_item p-2'>
                                        <Select.ItemText>CAD</Select.ItemText>
                                    </Select.Item>
                                </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        <input type="number" placeholder='0.00' className="input_style flex" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="btn primary rounded-full w-10 text-3xl"><RefreshCcw className='h-4 w-4'/></button>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="">TO</label>
                        <div className="flex gap-4">
                                    <Select.Root defaultValue=''>
                            <Select.Trigger className='select_trigger'>
                                <Select.Value placeholder="From Currency"/>
                                <Select.Icon>
                                    <ChevronDown/>
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content className='select_content'>
                                <Select.Viewport className='select_viewPort'>
                                    <Select.Item value='USD' className='select_item p-2'>
                                        <Select.ItemText>USD</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='EUR' className='select_item p-2'>
                                        <Select.ItemText>EUR</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='GBP' className='select_item p-2'>
                                        <Select.ItemText>GBP</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='JPY' className='select_item p-2'>
                                        <Select.ItemText>JPY</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='CHF' className='select_item p-2'>
                                        <Select.ItemText>CHF</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value='CAD' className='select_item p-2'>
                                        <Select.ItemText>CAD</Select.ItemText>
                                    </Select.Item>
                                </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        <input type="number" placeholder='0.00' className="input_style flex" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="bg-muted/20 p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                                <span className="font-interRegular rtl:font-danaRegular">Exchange Rate</span>
                                <span className="">fromCurrency = toCurrency</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn w-full mt-4 bg-green-900 hover:bg-success text-white">
                        <ArrowUpDown className='h-4 w-4 mr-2'/>
                        Exchange Now
                    </button>
                </div>
            </div>
        </div>
        <div className='space-y-4'>
             <div className="card p-2">
                <div className="cardHeader">
                    <h3 className="cardTitle">Transaction Summary</h3>
                </div>
                <div className="cardContent">
                    <div className="flex justify-between mt-4">
                        <span className='text-muted font-interRegular rtl:font-danaRegular text-lg'>Amount</span>
                        <span className='text-primary dark:text-white'>0</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span className='text-muted font-interRegular rtl:font-danaRegular text-lg'>Exchange Rate</span>
                        <span className='text-primary dark:text-white'>0</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span className='text-muted font-interRegular rtl:font-danaRegular text-lg'>Exchange Fee</span>
                        <span className='text-primary dark:text-white'>0</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span className='text-pretty dark:text-white font-interBold rtl:font-danaBold font-black text-lg'>You'll Receive</span>
                        <span className='text-primary dark:text-white'>0</span>
                    </div>
                </div>
             </div>
             <div className="card p-2 mt-4">
                <div className="cardHeader">
                    <h3 className="cardTitle flex items-center gap-2">
                        <TrendingUp className='h-5 w-5'/>
                        Live Exchange Rates
                    </h3>
                </div>
                <div className="cardContent mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>US</span>
                            <span>USD</span>
                        </div>
                            <span>0.800</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>US</span>
                            <span>USD</span>
                        </div>
                            <span>0.800</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>US</span>
                            <span>USD</span>
                        </div>
                            <span>0.800</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>US</span>
                            <span>USD</span>
                        </div>
                            <span>0.800</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>US</span>
                            <span>USD</span>
                        </div>
                            <span>0.800</span>
                    </div>
                </div>
             </div>
             <div className="card p-2 mt-4">
                <div className="cardHeader">
                    <h3 className="cardTitle">Market Information</h3>
                </div>
                <div className="cardContent mt-4">
                    <div className="flex justify-between mb-2">
                        <span className="text-muted">Market Status</span>
                        <span className="text-success">open</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-muted">Last Updated</span>
                        <span className="">2 min ago</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-muted">Exchange Fee</span>
                        <span className="">0.5%</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default ExchangeConversion