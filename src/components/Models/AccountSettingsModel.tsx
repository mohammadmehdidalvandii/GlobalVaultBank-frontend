import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from '@radix-ui/react-tabs'
import * as Select from '@radix-ui/react-select'
import * as Separator from '@radix-ui/react-separator';
import * as Switch from '@radix-ui/react-switch'
import { Bell, ChevronDown, Lock, Settings, Shield, X } from "lucide-react";

const AccountSettingsModel: React.FC = () => {
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
                Account Setting - Your name
            </Dialog.Title> 
            <Dialog.Description className="dialog_description">
                Manage account setting , limits , and security controls
            </Dialog.Description>
        </div>

        <Tabs.Root defaultValue="general" className="w-full">
            <Tabs.List className="tabList w-full flex items-center h-12 justify-evenly bg-gray-light dark:bg-gray-dark rounded-md">
                <Tabs.Trigger value="general" className="tabTrigger cursor-pointer">General</Tabs.Trigger>
                <Tabs.Trigger value="limits" className="tabTrigger cursor-pointer">Limits</Tabs.Trigger>
                <Tabs.Trigger value="security" className="tabTrigger cursor-pointer">Security</Tabs.Trigger>
                <Tabs.Trigger value="Notifications" className="tabTrigger cursor-pointer">Notification</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="general" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle">Account Status</h3>
                        <p className="cardDescription">Current account status and controls</p>
                    </div>
                    <div className="cardContent space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <label htmlFor="">Account Status</label>
                                <p className="text-muted">Account Number: **** **** *** 4353</p>
                            </div>
                                      <Select.Root defaultValue='Active'>
                                    <Select.Trigger className='select_trigger mt-2 w-[200px]' >
                                        <Select.Value placeholder="Account Status"/>
                                            <Select.Icon>
                                            <ChevronDown/>
                                            </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className='select_content'>
                                            <Select.Viewport className='select_viewPort'>
                                                <Select.Item value='Active' className='select_item p-2'>
                                                    <Select.ItemText>Active</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='Suspended' className='select_item p-2'>
                                                    <Select.ItemText>Suspended</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='Frozen' className='select_item p-2'>
                                                    <Select.ItemText>Frozen</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='Closed' className='select_item p-2'>
                                                    <Select.ItemText>Closed</Select.ItemText>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                        </div>
                        <Separator.Root className="separator h-[1px] w-full" />
                        <div className="flex justify-between items-center">
                           <div>
                             <label htmlFor="">Interest Rate (%)</label>
                            <input type="number" className="input_style mt-1 w-[320px]" step="0.1" />
                           </div>
                            <div>
                                   <label htmlFor="">Account Type</label>
                                            <Select.Root defaultValue='Checking'>
                                    <Select.Trigger className='select_trigger mt-2 w-[320px] h-10' >
                                        <Select.Value placeholder="Account Status"/>
                                            <Select.Icon>
                                            <ChevronDown/>
                                            </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className='select_content'>
                                            <Select.Viewport className='select_viewPort'>
                                                <Select.Item value='Checking' className='select_item p-2'>
                                                    <Select.ItemText>Checking</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='Savings' className='select_item p-2'>
                                                    <Select.ItemText>Savings</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='Business' className='select_item p-2'>
                                                    <Select.ItemText>Business</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='Investment' className='select_item p-2'>
                                                    <Select.ItemText>Investment</Select.ItemText>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <label htmlFor="">Overdraft Protection</label>
                                <p className="text-muted">Allow account to go negative</p>
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
                        <h3 className="cardTitle">Transaction Limits</h3>
                        <p className="cardDescription">Set daily monthly transaction limits</p>
                    </div>
                    <div className="cardContent">
                        <div className="flex justify-between items-center mb-3 mt-3">
                            <div>
                             <label htmlFor="">Daily Limit</label>
                            <input type="number" className="input_style mt-1 w-[320px]" value='5000'/>
                           </div>
                            <div>
                             <label htmlFor="">monthly Limit</label>
                            <input type="number" className="input_style mt-1 w-[320px]" value='5000'/>
                           </div>
                        </div>
                        <Separator.Root className="separator h-[1px] w-full" />
                        <div className="flex justify-between items-center">
                            <div>
                             <label htmlFor="">ATM Limit</label>
                            <input type="number" className="input_style mt-1 w-[320px]" defaultValue="1000"/>
                           </div>
                            <div>
                             <label htmlFor="">per Transaction Limit</label>
                            <input type="number" className="input_style mt-1 w-[320px]"  defaultValue="500"/>
                           </div>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="security" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle">Security Controls</h3>
                        <p className="cardDescription font-interBold rtl:font-danaBold mt-1 text-lg">Manage account security and access controls</p>
                    </div>
                    <div className="cardContent">
                        <div className="flex items-center justify-between p-4 border rounded-lg mt-4">
                            <div className="flex items-center gap-3">
                                <Lock className="h-5 w-5 text-muted"/>
                                <div>
                                    <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Freeze Account</label>
                                    <p className="text-muted font-interRegular rtl:font-danaRegular">Temporarily disable all transactions </p>
                                </div>
                            </div>
                            <button className="btn danger w-[150px]">Freeze Account</button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg mt-4">
                            <div className="flex items-center gap-3">
                                <Lock className="h-5 w-5 text-muted"/>
                                <div>
                                    <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Block Debit Cards</label>
                                    <p className="text-muted font-interRegular rtl:font-danaRegular">Prevent card transactions </p>
                                </div>
                            </div>
                            <button className="btn primary">Manage Cards</button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg mt-4">
                            <div className="flex items-center gap-3">
                                <Lock className="h-5 w-5 text-muted"/>
                                <div>
                                    <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Reset PIN</label>
                                    <p className="text-muted font-interRegular rtl:font-danaRegular">Generate new PIN for customer</p>
                                </div>
                            </div>
                            <button className="btn primary">Reset PIN</button>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="Notifications" className="tabContent">
                <div className="card p-2 mt-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle">Notification Settings</h3>
                        <p className="cardDescription font-interBold rtl:font-danaBold mt-1 text-lg">Configure alert and notifications</p>
                    </div>
                    <div className="cardContent">
                        <div className="flex items-center justify-between my-2">
                            <div>
                                <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Transaction Alerts</label>
                                <p className="text-muted font-interRegular rtl:font-danaRegular">Notify customer or transactions</p>
                            </div>
                                <Switch.Root checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} className="switchRoot">
                                <Switch.Thumb className="switchThumb"/>
                            </Switch.Root>
                        </div>
                        <Separator.Root className="separator h-[1px] w-full" />
                        <div className="space-y-3 my-2">
                            <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Alert Thresholds</label>
                            <div className="flex items-center justify-between">
                                <div>
                                <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Low Balance Alert</label>
                                <input type="number" className="input_style w-[340px] mt-2" defaultValue='100'/>
                                </div>
                                <div>
                                <label htmlFor="" className="font-interRegular rtl:font-danaRegular">Large Transaction  Alert</label>
                                <input type="number" className="input_style w-[340px] mt-2" defaultValue='1000'/>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-4 text-muted rounded-lg">
                                <Bell className="h-4 w-4 text-muted"/>
                                Customer will receive notification vis SMS end email
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
                >Cancel</button>
                <button className="btn secondary">Save Change</button>
            </div>

        <Dialog.Close asChild>
            <button className="dialog_close btn cursor-pointer rtl:left-2 right-2 top-2 ">
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
