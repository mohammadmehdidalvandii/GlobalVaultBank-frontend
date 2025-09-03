import { ChevronDown, Search, ShoppingCart } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import React from 'react'
import TransactionDetailsModel from '@components/Models/TransactionDetailsModel';

const TransactionListFilter:React.FC = ()=>{
  return (
    <>
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle">Filter Transactions</h3>
        </div>
        <div className="cardContent">
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1">
                    <div className="relative">
                        <Search className='absolute left-3 top-3 w-4 h-4 text-muted'/>
                        <input type="text" className="input_style" />
                    </div>
                </div>
                    <Select.Root defaultValue='Category'>
                    <Select.Trigger className='select_trigger md:w-48'>
                        <Select.Value placeholder='Category'/>
                        <Select.Icon>
                            <ChevronDown/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className='select_content'>
                            <Select.Viewport className='select_viewPort'>
                                <Select.Item value='Active' className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>Active</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='Suspended' className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>Suspended</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='Frozen' className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>Frozen</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='Closed' className='select_item text-primary dark:text-white'>
                                    <Select.ItemText>Closed</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
                <Select.Root defaultValue='All'>
                    <Select.Trigger className='select_trigger md:w-48'>
                        <Select.Value placeholder='Currency'/>
                        <Select.Icon>
                            <ChevronDown/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className='select_content'>
                            <Select.Viewport className='select_viewPort'>
                                <Select.Item value='All' className='select_item'>
                                    <Select.ItemText>All</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='USD' className='select_item'>
                                    <Select.ItemText>USD</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='EUR' className='select_item'>
                                    <Select.ItemText>EUR</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='GBP' className='select_item'>
                                    <Select.ItemText>GBP</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
        </div>
    </div>
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle">Recent Transactions</h3>
        </div>
        <div className="cardContent">
            <div className="space-y-4">
                <TransactionDetailsModel 
                trigger={
                    <div className='flex items-center justify-between py-4 border-b border-muted last:border-0 hover:bg-muted/30
                    transition-colors rounded-lg px-2 cursor-pointer mt-4
                    '>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                <ShoppingCart className='h-6 w-6 text-muted'/>
                            </div>
                            <div className="flex-1">
                                <p className="font-interRegular rtl:font-danaRegular">Online Purchase - Amazon</p>
                                <div className="flex items-center gap-4 text-muted">
                                    <span>2024-01-21</span>
                                    <span>2:30 px</span>
                                    <span className='capitalize'>Shopping</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                            <p className="font-interBold rtl:font-danaRegular text-lg">$125.99</p>
                            <div className="flex items-center gap-2">
                                <span className="text-muted">USD</span>
                                <span className=" py-1 px-2 text-success">Completed</span>
                            </div>
                        </div>
                    </div>
                }
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default TransactionListFilter