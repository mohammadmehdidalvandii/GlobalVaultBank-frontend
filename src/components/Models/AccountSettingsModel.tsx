import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from '@radix-ui/react-tabs'
import * as Select from '@radix-ui/react-select'
import * as Separator from '@radix-ui/react-separator';
import * as Switch from '@radix-ui/react-switch'
import { Bell, ChevronDown, Lock, Settings, Shield, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AccountProps } from "@types/account";


type AccountSettingsModelProps = {
  accounts: AccountProps;
};


const AccountSettingsModel: React.FC<AccountSettingsModelProps> = ({accounts}) => {
const {t ,i18n} = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [checked , setChecked] = useState<boolean>(false);
  const [notificationsEnabled , setNotificationsEnabled ] = useState<boolean>(true)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn primary w-[50px]">
          <Settings className="h-4 w-4" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog_overlay">
            <Dialog.Content className="dialog_content sm:max-w-[800px] bg-white dark:bg-primary-100 border-border max-h-[90vh] overflow-y-auto select-none">
        <div className="dialog_header">
            <Dialog.Title className="flex items-center gap-2 text-2xl font-interBlack rtl:font-danaBlack text-primary dark:text-white">
                <Shield className="h-5 w-5"/>
                {t('Account Settings')} - {accounts.accountName}
            </Dialog.Title> 
            <Dialog.Description className="dialog_description block rtl:text-right">
                {t('Manage account setting , limits , and security controls')}
            </Dialog.Description>
        </div>

        <Tabs.Root defaultValue={t('general')} className="w-full">
            <Tabs.List className="tabList w-full flex items-center h-12 justify-evenly bg-gray-light dark:bg-gray-dark rounded-md">
                <Tabs.Trigger value={t('general')} className="tabTrigger cursor-pointer">{t('General')}</Tabs.Trigger>
                <Tabs.Trigger value={t('limits')} className="tabTrigger cursor-pointer">{t('Limits')}</Tabs.Trigger>
                <Tabs.Trigger value={t('security')} className="tabTrigger cursor-pointer">{t('Security')}</Tabs.Trigger>
                <Tabs.Trigger value={t('Notifications')} className="tabTrigger cursor-pointer">{t('Notification')}</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="general" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle rtl:text-right">{t('Account Status')}</h3>
                        <p className="cardDescription rtl:text-right">{t('Current account status and controls')}</p>
                    </div>
                    <div className="cardContent space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <label htmlFor="" className="label_style">{t('Account Status')}</label>
                                <p className="text-muted">{t('Account Number')}: {accounts.accountNumber}</p>
                            </div>
                                      <Select.Root defaultValue={t(accounts.status)}>
                                    <Select.Trigger className='select_trigger mt-2 w-[200px]' >
                                        <Select.Value placeholder={t(accounts.status)}/>
                                            <Select.Icon>
                                            <ChevronDown/>
                                            </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className='select_content'>
                                            <Select.Viewport className='select_viewPort'>
                                                <Select.Item value={t('Active')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Active')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value={t('Suspended')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Suspended')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value={t('Frozen')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Frozen')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value={t('Closed')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Closed')}</Select.ItemText>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                        </div>
                        <Separator.Root className="separator h-[1px] w-full" />
                        <div className="flex justify-between items-center">
                           <div>
                             <label htmlFor="" className="label_style">{t('Interest Rate')} (%)</label>
                            <input type="number" className="input_style mt-1 w-[320px]" step="0.1" />
                           </div>
                            <div>
                                   <label htmlFor="">{t('Account Type')}</label>
                                            <Select.Root defaultValue={t(accounts.status)}>
                                    <Select.Trigger className='select_trigger mt-2 w-[320px] h-10' >
                                        <Select.Value placeholder={accounts.status}/>
                                            <Select.Icon>
                                            <ChevronDown/>
                                            </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className='select_content'>
                                            <Select.Viewport className='select_viewPort'>
                                                <Select.Item value={t('Checking')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Checking')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value={t('Savings')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Savings')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value={t('Business')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Business')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value={t('Investment')} className='select_item p-2'>
                                                    <Select.ItemText>{t('Investment')}</Select.ItemText>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <label htmlFor="" className="label_style">{t('Overdraft Protection')}</label>
                                <p className="text-muted">{t('Allow account to go negative')}</p>
                            </div>
                            <Switch.Root checked={checked} onCheckedChange={setChecked} className="switchRoot">
                                <Switch.Thumb className="switchThumb"/>
                            </Switch.Root>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="limits" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle">{t('Transaction Limits')}</h3>
                        <p className="cardDescription">{t('Set daily monthly transaction limits')}</p>
                    </div>
                    <div className="cardContent">
                        <div className="flex justify-between items-center mb-3 mt-3">
                            <div>
                             <label htmlFor="" className="label_style">{t('Daily Limit')}</label>
                            <input type="number" className="input_style mt-1 w-[320px]" value={accounts.dailyWithdrawalLimit}/>
                           </div>
                            <div>
                             <label htmlFor="" className="label_style">{t('Monthly Limit')}</label>
                            <input type="number" className="input_style mt-1 w-[320px]" value='5000'/>
                           </div>
                        </div>
                        <Separator.Root className="separator h-[1px] w-full" />
                        <div className="flex justify-between items-center mt-4">
                            <div>
                             <label htmlFor="" className="label_style">{t('ATM Limit')}</label>
                            <input type="number" className="input_style mt-1 w-[320px]" defaultValue="1000"/>
                           </div>
                            <div>
                             <label htmlFor="" className="label_style">{t('per Transaction Limit')}</label>
                            <input type="number" className="input_style mt-1 w-[320px]"  defaultValue={accounts.dailyTransactionLimit}/>
                           </div>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="security" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle">{t('Security Controls')}</h3>
                        <p className="cardDescription font-interBold rtl:font-danaBold mt-1 text-lg">{t('Manage account security and access controls')}</p>
                    </div>
                    <div className="cardContent">
                        <div className={`flex items-center justify-between p-4 border rounded-lg mt-4 ${i18n.language === 'fa' ? "flex-row-reverse":""}`}>
                            <div className={`flex items-center gap-3  ${i18n.language === 'fa' ?'flex-row-reverse' :""}`}>
                                <Lock className="h-5 w-5 text-muted"/>
                                <div>
                                    <label htmlFor="" className="label_style">{t('Freeze Account')}</label>
                                    <p className="text-muted font-interRegular rtl:font-danaRegular">{t('Temporarily disable all transactions')} </p>
                                </div>
                            </div>
                            <button className="btn danger w-[150px]">{t('Freeze Account')}</button>
                        </div>
                        <div className={`flex items-center justify-between p-4 border rounded-lg mt-4 ${i18n.language === 'fa' ? "flex-row-reverse":""}`}>
                            <div className={`flex items-center gap-3  ${i18n.language === 'fa' ?'flex-row-reverse' :""}`}>
                                <Lock className="h-5 w-5 text-muted"/>
                                <div>
                                    <label htmlFor="" className="label_style">{t('Block Debit Cards')}</label>
                                    <p className="text-muted font-interRegular rtl:font-danaRegular">{t('Prevent card transactions')}</p>
                                </div>
                            </div>
                            <button className="btn primary">{t('Manage Cards')}</button>
                        </div>
                        <div className={`flex items-center justify-between p-4 border rounded-lg mt-4 ${i18n.language === 'fa' ? "flex-row-reverse":""}`}>
                            <div className={`flex items-center gap-3  ${i18n.language === 'fa' ?'flex-row-reverse' :""}`}>
                                <Lock className="h-5 w-5 text-muted"/>
                                <div>
                                    <label htmlFor="" className="label_style">{t('Reset PIN')}</label>
                                    <p className="text-muted font-interRegular rtl:font-danaRegular">{t('Generate new PIN for customer')}</p>
                                </div>
                            </div>
                            <button className="btn primary w-fit p-1">{t('Reset PIN')}</button>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="Notifications" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle">{t('Notification Settings')}</h3>
                        <p className="cardDescription font-interBold rtl:font-danaBold mt-1 text-lg">{t('Configure alert and notification')}</p>
                    </div>
                    <div className="cardContent">
                        <div className="flex items-center justify-between my-2">
                            <div>
                                <label htmlFor="" className="label_style">{t('Transaction Alerts')}</label>
                                <p className="text-muted font-interRegular rtl:font-danaRegular">{t('Notify customer or transaction')}</p>
                            </div>
                                <Switch.Root checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} className="switchRoot">
                                <Switch.Thumb className="switchThumb"/>
                            </Switch.Root>
                        </div>
                        <Separator.Root className="separator h-[1px] w-full" />
                        <div className="space-y-3 my-2">
                            <label htmlFor="" className="label_style ">{t('Alert Thresholds')}</label>
                            <div className="flex items-center justify-between">
                                <div>
                                <label htmlFor="" className="label_style  ">{t('Low Balance Alert')}</label>
                                <input type="number" className="input_style w-[340px] mt-2" defaultValue='100'/>
                                </div>
                                <div>
                                <label htmlFor="" className="label_style  ">{t('Large Transaction  Alert')}</label>
                                <input type="number" className="input_style w-[340px] mt-2" defaultValue='1000'/>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-4 text-muted rounded-lg">
                                <Bell className="h-4 w-4 text-muted"/>
                                {t('Customer will receive notification vis SMS and email')}
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
        </Tabs.Root>

            <div className="flex justify-end gap-2 pt-4 border-t">
                <button className="btn primary w-[100px]"
                type="button"
                onClick={()=>setOpen(false)}
                >{t('Cancel')}</button>
                <button className="btn secondary">{t('Save Change')}</button>
            </div>

        <Dialog.Close asChild>
            <button className="dialog_close btn cursor-pointer rtl:left-2  rtl:top-2 ">
                <X/>
            </button>
        </Dialog.Close>
            </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AccountSettingsModel;
