import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from '@radix-ui/react-tabs'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, CreditCard, Edit, Eye, History, Lock, Settings, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AccountProps } from "../../types/account";
import { useMutation } from "@tanstack/react-query";
import { updatedAccount } from "@services/accountServices";
import { showError, showInfo, showSuccess } from "@utils/Toasts";

type AccountDetailsModelProps = {
  accounts: AccountProps;
};



const AccountDetailsModel: React.FC<AccountDetailsModelProps> = ({accounts}) => {

  const {t} = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [isEditing , setIsEditing] = useState<boolean>(false);
  const [changeFields,setChangeFields] = useState<Record<string, string>>();


  const mutation = useMutation({
    mutationFn:updatedAccount,
    onSuccess:()=>{
      showSuccess(t('updated Field successfully'))
      window.location.reload()
    },
    onError:(error)=>{
      showError(`${error}`)
    },
    })

  const handlerChangeSettingAccount = (accountId:string , e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    mutation.mutate({id:accountId, update:changeFields})
  }

  const handlerApiStatusCard = (accountId:string, status:string , e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    const cardStatus = status === "blocked"?'active':'blocked';
    mutation.mutate({id:accountId , update:{cardStatus:cardStatus} })
    showSuccess(t('updated status card'))
  }


  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn primary rtl:gap-2">
          <Eye className="h-4 w-4 mr-2" />
          {t('Details')}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog_overlay"/>
        <Dialog.Content className="dialog_content sm:max-w-[800px] bg-white dark:bg-primary-100 border-border max-h-[90vh] overflow-y-auto select-none">
            <div className="dialog_header">
                <Dialog.Title className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-2xl font-interBlack rtl:font-danaBlack text-primary dark:text-white">
                        <Eye className="h-5 w-5"/>
                        {t('Account Details')} - {accounts.accountName}
                    </div>
                    <div className="badge badge_default">{t(accounts.status)}</div>
                </Dialog.Title>
            </div>
            <Tabs.Root defaultValue="overview" className="w-full">
                <Tabs.List className="tabList w-full flex items-center h-12 justify-evenly bg-gray-light dark:bg-gray-dark rounded-md">
                    <Tabs.Trigger value="overview" className="tabTrigger cursor-pointer">{t('Overview')}</Tabs.Trigger>
                    <Tabs.Trigger value="transactions" className="tabTrigger cursor-pointer">{t('Transaction')}</Tabs.Trigger>
                    <Tabs.Trigger value="settings" className="tabTrigger cursor-pointer">{t('Settings')}</Tabs.Trigger>
                    <Tabs.Trigger value="security" className="tabTrigger cursor-pointer">{t('Security')}</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="overview" className="tabContent">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card p-2">
                      <div className="cardHeader">
                        <h3 className="cartTitle text-2xl text-primary dark:text-white">{t('Account Information')}</h3>
                      </div>
                      <div className="cardContent space-y-3 mt-4">
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Account Number')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">{accounts.accountNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">{t('Account Type')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">{accounts.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Currency')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">{accounts.currency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Interest Rate')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">{accounts.currency} APY</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t("Status")}</span>
                          <span className="font-interRegular rtl:font-danaRegular">
                            <p className="badge badge_default">{t(accounts.status)}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card p-2">
                      <div className="cardHeader">
                        <h3 className="cartTitle text-2xl text-primary dark:text-white">{t('Balance Information')}</h3>
                      </div>
                      <div className="cardContent space-y-3 mt-4">
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Current Balance')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">${accounts.balance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Available Balance')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">${accounts.balance }</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Pending Transactions')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted font-interRegular rtl:font-danaRegular text-lg">{t('Last Transaction')}</span>
                          <span className="font-interRegular rtl:font-danaRegular">Today , 2:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="transactions" className="tabContent">
                  <div className="card p-2">
                      <div className="cardHeader">
                        <h3 className="cardTitle flex  items-center gap-2">
                          <History className="h-5 w-5"/>
                          {t('Recent Transaction')}
                        </h3>
                      </div>
                      <div className="cardContent space-y-3 mt-4">
                        {accounts.transactions.length === 0 ?(<p className="text_alert">There are not Transactions </p>):(
                          accounts.transactions.map((transaction:AccountProps)=>(
                        <div className="flex items-center justify-between py-2 border-b border-border dark:border-muted last:border-0" key={transaction.id}>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                              <CreditCard className="h-4 w-4 text-muted"/>
                            </div>
                            <div>
                              <p className="font-interRegular rtl:font-danaRegular text-lg">{transaction.description}</p>
                              <p className="text-sm text-muted">{new Date(transaction.updatedAt).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-success font-interBold dark:font-danaBold">+ ${transaction.amount}</p>
                          </div>
                        </div>
                          ))
                        )}
                      </div>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="settings" className="tabContent">
                  <div className="card p-2 mt-4">
                    <div className="cardHeader">
                      <div className="flex items-center justify-between">
                          <h3 className="cardTitle flex items-center gap-2">
                              <Settings className="h-5 w-5"/>
                              {t('Account Settings')}
                          </h3>
                          <button className="btn primary text-base w-[110px]"
                          onClick={()=>setIsEditing(!isEditing)}
                          >
                              <Edit className="h-4 w-4 mr-2"/>
                              {isEditing ? `${t('Cancel')}` : `${t('Edit')}`}
                          </button>
                      </div>
                      </div>
                      <div className="cardHeader">
                        <form action="#" onSubmit={(e)=>handlerChangeSettingAccount(accounts.id ,e)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <label htmlFor="" className="label_style text-lg">{t('Account Status')} *</label>
                                <Select.Root defaultValue={accounts.status}  disabled={!isEditing}
                                onValueChange={(value)=>setChangeFields((prev)=>({...prev , status:value}))}
                                >
                                    <Select.Trigger className='select_trigger mt-2'>
                                        <Select.Value placeholder={t('Account Status')}/>
                                            <Select.Icon>
                                            <ChevronDown/>
                                            </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className='select_content'>
                                            <Select.Viewport className='select_viewPort'>
                                                <Select.Item value='active' className='select_item p-2'>
                                                    <Select.ItemText>{t('Active')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='suspended' className='select_item p-2'>
                                                    <Select.ItemText>{t('Suspended')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='frozen' className='select_item p-2'>
                                                    <Select.ItemText>{t('Frozen')}</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item value='closed' className='select_item p-2'>
                                                    <Select.ItemText>{t("Closed")}</Select.ItemText>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="" className='label_style text-lg'>{t('Interest Rate')} (%)</label>
                                <input type="number" className='input_style mt-2' step='0.1' defaultValue={accounts.interestRate}
                                onChange={(e)=>setChangeFields((prev)=>({
                                  ...prev,
                                  interestRate:e.target.value
                                }))}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="" className='label_style text-lg'>{t('Daily Transaction Limit')}</label>
                                <input type="number" className='input_style mt-2' step='0.1' defaultValue={accounts.dailyTransactionLimit}
                                onChange={(e)=>setChangeFields((prev)=>({
                                  ...prev,
                                  dailyTransactionLimit:e.target.value
                                }))}
                                />
                            </div>
                        </div>
                            {isEditing && (
                              <button type="submit" className="btn secondary text w-full mt-5 ">
                                {t('Save Change')}
                              </button>
                            ) }
                        </form>
                      </div>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="security" className="tabContent">
                  <div className="card p-2">
                    <div className="cardHeader">
                        <h3 className="cardTitle flex items-center gap-2">
                          <Lock className="h-5 w-5" />
                          {t('Security Controls')}
                        </h3>
                    </div>
                    <div className="cardContent mt-5">
                        <div className="flex items-center justify-between p-3 border border-border dark:border-muted rounded-lg mb-3">
                          <div>
                            <p className="font-interRegular rtl:font-danaRegular text-primary dark:text-white">{t('Account Lock')}</p>
                            <p className="text-base text-muted">{t('Temporarily lock this account')}</p>
                          </div>
                          <button className="btn primary w-[150px]"
                          onClick={()=>showInfo(t('Developing'))}
                          >
                            <Lock className="h-4 w-4 mr-2"/>
                            {t('Lock Account')}
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-border dark:border-muted rounded-lg mb-3">
                          <div>
                            <p className="font-interRegular rtl:font-danaRegular text-primary dark:text-white">{t('Reset PIN')}</p>
                            <p className="text-base text-muted">{t('Generate new PIN for customer')}</p>
                          </div>
                          <button className="btn primary w-fit p-1"
                          onClick={()=>showInfo(t('Developing'))}
                          >
                            {t('Reset PIN')}
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-border dark:border-muted rounded-lg mb-3">
                          <div>
                            <p className="font-interRegular rtl:font-danaRegular text-primary dark:text-white">{t('Block Cards')} - {t(accounts.cardStatus)}</p>
                            <p className="text-base text-muted">{t('Block all cards linked to this account')}</p>
                          </div>
                          <button type="button" className={`btn ${accounts.cardStatus === "active" ? 'secondary' :'danger'} w-[150px]`}
                          onClick={(e)=>handlerApiStatusCard(accounts.id, accounts.cardStatus , e)}
                          >
                            {t(accounts.cardStatus)}
                          </button>
                        </div>
                    </div>
                  </div>
                </Tabs.Content>
            </Tabs.Root>
            <Dialog.Close asChild>
            <button className="dialog_close btn cursor-pointer rtl:left-2 rtl:top-2">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AccountDetailsModel;
