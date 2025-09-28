import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { Eye, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { transactionProps } from '@types/transaction';

interface transactionModelData {
    trigger:React.ReactNode
    transactions:transactionProps,
}

const TransactionDetailsModel:React.FC<transactionModelData> =  ({trigger ,  transactions}) => {
    console.log("t->",transactions)
    const {t} = useTranslation()
    const [open , setOpen ] = useState<boolean>(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
            {trigger}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className='dialog_overlay'>
                <Dialog.Content className='dialog_content sm:max-w-[600px] bg-white dark:bg-primary-100 border-muted'>
                    <div className="dialog_header">
                        <Dialog.Title className='flex items-center gap-2'>
                            <div className="flex items-center gap-2 text-2xl font-interBlack rtl:font-danaBlack text-primary dark:text-white">
                                <Eye className='h-5 w-5'/>
                                {t('Transaction Details')}  - #1
                            </div>
                        </Dialog.Title>
                    </div>
                    <Tabs.Root defaultValue='details' className='w-full'>
                        <Tabs.List className='tabList w-full flex items-center h-12 justify-evenly bg-gray-light dark:bg-gray-dark rounded-md'>
                            <Tabs.Trigger value='details' className='tabTrigger cursor-pointer'>{t('Details')}</Tabs.Trigger>
                            <Tabs.Trigger value='security' className='tabTrigger cursor-pointer'>{t('Security')}</Tabs.Trigger>
                            <Tabs.Trigger value='actions' className='tabTrigger cursor-pointer'>{t('Actions')}</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value='details' className='tabContent'>
                            <div className="card p-2 ">
                                <div className="cardHeader">
                                    <h3 className="cardTitle text-primary dark:text-white">{t('Transaction Information')}</h3>
                                </div>
                                <div className="cardContent space-y-4 mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Transaction')} ID</span>
                                        <span className="font-interRegular rtl:font-danaRegular">#{transactions.id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Description')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular">{transactions.description}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Amount')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular font-black">${transactions.amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Date & Time<')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular">{new Date(transactions.createdAt).toLocaleDateString()} at {new Date(transactions.createdAt).toLocaleTimeString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Category')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular">Shopping</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Status')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular text-success">{transactions.status}</span>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value='security' className='tabContent'>
                            <div className="card p-2">
                                <div className="cardHeader">
                                    <h3 className="cardTitle text-primary dark:text-white">{t('Security Analysis')}</h3>
                                </div>
                                <div className="cardContent space-y-4 mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Risk Score')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular text-lg text-success">Low Risk</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">IP {t('Address')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular text-lg">192.168.1.1</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Device')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular text-lg">Iphone 15 pro</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Location')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular text-lg"> New York, NY , USA</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted text-xl">{t('Authentication')}</span>
                                        <span className="font-interRegular rtl:font-danaRegular text-lgr text-success">2FA Verified</span>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value='actions' className='tabContent'>
                            <div className="card p-2">
                                <div className="cardHeader">
                                    <h3 className="cardTitle text-primary dark:text-white">{t('Administrative Actions')}</h3>
                                </div>
                                <div className="cardContent space-y-4 mt-4">
                                    <div className="grid grid-cols-2 gap-3 w-full">
                                        <button className="btn primary w-full">{t('Mark Pending')}</button>
                                        <button className="btn primary w-full">{t('Approve')}</button>
                                        <button className="btn danger w-full">{t('Reject')}</button>
                                        <button className="btn primary w-full">{t('Flag for Review')}</button>
                                        <button className="btn secondary w-full col-span-2">{t('Generate Report ')}</button>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                            <Dialog.Close asChild>
                                <button className="dialog_close btn  cursor-pointer rtl:left-2 rtl:top-2">
                                    <X/>
                                </button>
                            </Dialog.Close>
                    </Tabs.Root>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default TransactionDetailsModel