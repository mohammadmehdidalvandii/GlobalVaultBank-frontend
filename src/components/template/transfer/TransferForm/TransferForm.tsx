import { ChevronDown, DollarSign, Send } from 'lucide-react';
import React from 'react';
import * as Select from '@radix-ui/react-select';

const TransferForm:React.FC = ()=>{
  return (
    <div className="card p-2 mt-4">
        <div className="cardHeader">
            <h3 className="cardTitle flex items-center gap-2">
                <Send className='h-5 w-5'/>
                New Transfer
            </h3>
        </div>
        <div className="cardContent mt-4">
                        <div className="space-y-2 mt-4">
                <label htmlFor="text-primary-100 dark:text-white text-lg">Transfer Type</label>
                <Select.Root defaultValue='transfer type'>
                    <Select.Trigger className='select_trigger mt-2'>
                        <Select.Value placeholder='Select transfer type'/>
                        <Select.Icon>
                            <ChevronDown/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className='select_content'>
                            <Select.Viewport className='select_viewPort'>
                                <Select.Item value='Internal Transfer' className='select_item p-2'>
                                    <Select.ItemText>Internal Transfer</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='external' className='select_item p-2'>
                                    <Select.ItemText>External Transfer</Select.ItemText>
                                </Select.Item>
                                <Select.Item value='international' className='select_item p-2'>
                                    <Select.ItemText>International Wire</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="text-primary-100 dark:text-white text-lg">From Account</label>
                <Select.Root defaultValue='from-account'>
                    <Select.Trigger className='select_trigger mt-2'>
                        <Select.Value placeholder='Select source account'/>
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
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="text-primary-100 dark:text-white text-lg">To Account </label>
                <Select.Root defaultValue='transfer type'>
                    <Select.Trigger className='select_trigger mt-2'>
                        <Select.Value placeholder='Select transfer type'/>
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
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="" className='text-primary-100 dark:text-white text-lg'>Amount</label>
                <div className="relative">
                    <DollarSign className='absolute left-3 top-3 h-4 w-4 text-muted'/>
                    <input type="number" className="input_style pl-7" placeholder='0.00' />
                </div>
            </div>
            <div className="space-y-2 mt-4">
                <label htmlFor="" className='text-primary-100 dark:text-white text-lg'>Amount</label>
                <textarea name="" id=""  className='input_style h-28'/>
            </div>
            <button className="btn secondary w-full mt-4">
                <Send className='h-4 w-4 mr-2'/>
                Transfer Now
            </button>
        </div>
    </div>
  )
}

export default TransferForm