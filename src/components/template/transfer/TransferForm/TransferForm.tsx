import { ChevronDown, DollarSign, Send } from 'lucide-react';
import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { useTranslation } from 'react-i18next';
import { AccountProps } from '../../../../types/account';
import { useMutation } from '@tanstack/react-query';
import { createTransfer } from '@services/transferServices';
import { showError, showSuccess } from '@utils/Toasts';

type AccountTransferForm = {
    data:AccountProps[]
}

const TransferForm:React.FC<AccountTransferForm> = ({data})=>{
    const {t} = useTranslation();
    const [selectFromAccount , setSelectFromAccount]= useState<{accountId:string , customerId:string}|null>(null);
    const [selectToAccount , setSelectToAccount]= useState<{accountId:string , customerId:string}|null>(null);
    const [currency , setCurrency] =  useState<string>("");
    const [transferType , setTransferType]=useState<string>('');
    const [amount , setAmount] = useState<string>("");
    const [feeAmount , setFeeAmount] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [exchangeRate , setExchangeRate] = useState<string>("");


    const resetForm = ()=>{
        setSelectFromAccount(null),
        setSelectToAccount(null),
        setCurrency(''),
        setTransferType(''),
        setAmount(''),
        setFeeAmount(''),
        setDescription(''),
        setExchangeRate('')
    }

    const mutation = useMutation({
        mutationFn:createTransfer,
        onSuccess:()=>{
            showSuccess('Created Transfer Successfully')
            resetForm();
            window.location.reload()
        },
        onError:(error)=>{
            showError(`${error.message}`)
        },
    });

    const handlerCreateTransfer:React.FormEventHandler = (e)=>{
        e.preventDefault();

        mutation.mutate({
        fromAccountId:selectFromAccount?.accountId,
        toAccountId:selectToAccount?.accountId,
        fromCustomerId:selectFromAccount?.customerId,
        toCustomerId:selectToAccount?.customerId,
        amount:amount,
        currency:currency,
        transferType:transferType,
        description:description,
        feeAmount:feeAmount,
        exchangeRate:exchangeRate,
        })
    }

 return (
    <div className="card p-2 mt-4">
      <div className="cardHeader">
        <h3 className="cardTitle flex items-center gap-2">
          <Send className="h-5 w-5" />
          {t('New Transfer')}
        </h3>
      </div>

      <div className="cardContent mt-4 space-y-6">
        <form action="#" onSubmit={handlerCreateTransfer}>
        {/* Transfer Type */}
        <div className="space-y-2">
          <label className="text-primary-100 dark:text-white text-lg">{t('Transfer Type')}</label>
          <Select.Root value={transferType} onValueChange={setTransferType}>
            <Select.Trigger className="select_trigger mt-2">
              <Select.Value placeholder="Select transfer type" />
              <Select.Icon>
                <ChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="select_content">
                <Select.Viewport className="select_viewPort">
                  <Select.Item value="Internal Transfer" className="select_item p-2">
                    <Select.ItemText>{t('Internal Transfer')}</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="external" className="select_item p-2">
                    <Select.ItemText>{t('External Transfer')}</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="Wire" className="select_item p-2">
                    <Select.ItemText>{t('International Wire')}</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* From Account */}
        <div className="space-y-2">
          <label className="text-primary-100 dark:text-white text-lg">{t('From Account')}</label>
          <Select.Root onValueChange={(val) => setSelectFromAccount(JSON.parse(val))}>
            <Select.Trigger className="select_trigger mt-2">
              <Select.Value placeholder="Select source account" />
              <Select.Icon>
                <ChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="select_content">
                <Select.Viewport className="select_viewPort">
                  {data.map((account: AccountProps) => (
                    <Select.Item
                      value={JSON.stringify({ accountId: account.id, customerId: account.customerId })}
                      className="select_item p-2"
                      key={account.id}
                    >
                      <Select.ItemText>
                        {account.accountName} — {account.accountNumber}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* To Account */}
        <div className="space-y-2">
          <label className="text-primary-100 dark:text-white text-lg">{t('To Account')}</label>
          <Select.Root onValueChange={(val) => setSelectToAccount(JSON.parse(val))}>
            <Select.Trigger className="select_trigger mt-2">
              <Select.Value placeholder="Select destination account" />
              <Select.Icon>
                <ChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="select_content">
                <Select.Viewport className="select_viewPort">
                  {data.map((account: AccountProps) => (
                    <Select.Item
                      value={JSON.stringify({ accountId: account.id, customerId: account.customerId })}
                      className="select_item p-2"
                      key={account.id}
                    >
                      <Select.ItemText>
                        {account.accountName} — {account.accountNumber}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Currency */}
        <div className="space-y-2">
          <label className="text-primary-100 dark:text-white text-lg">{t('Currency Type')}</label>
          <Select.Root value={currency} onValueChange={setCurrency}>
            <Select.Trigger className="select_trigger mt-2">
              <Select.Value placeholder="Select currency type" />
              <Select.Icon>
                <ChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="select_content">
                <Select.Viewport className="select_viewPort">
                  <Select.Item value="USD" className="select_item p-2">
                    <Select.ItemText>{t('USD')}</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="EUR" className="select_item p-2">
                    <Select.ItemText>{t('EUR')}</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="GBP" className="select_item p-2">
                    <Select.ItemText>{t('GBP')}</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <label className="block text-primary-100 dark:text-white text-lg mb-3">{t('Amount')}</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted" />
            <input
              type="number"
              className="input_style pl-7"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        {/* Fee Amount */}
        <div className="space-y-2">
          <label className="block text-primary-100 dark:text-white text-lg mb-3">{t('Fee Amount')}</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted" />
            <input
              type="number"
              className="input_style pl-7"
              placeholder={t('Fee Amount')}
              value={feeAmount}
              onChange={(e) => setFeeAmount(e.target.value)}
            />
          </div>
        </div>
        {/* Exchange Rate */}
        <div className="space-y-2">
          <label className="block text-primary-100 dark:text-white text-lg mb-3">{t('Exchange Rate')}</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted" />
            <input
              type="number"
              className="input_style pl-7"
              placeholder={t('Exchange Rate')}
              value={exchangeRate}
              onChange={(e) => setExchangeRate(e.target.value)}
            />
          </div>
        </div>

        {/* Memo */}
        <div className="space-y-2">
          <label className="block text-primary-100 dark:text-white text-lg mb-3">{t('Memo (Optional)')}</label>
          <textarea
            className="input_style h-28"
            placeholder={t('Add a note for this transfer...')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button type='submit' className="btn secondary w-full mt-4">
          <Send className="h-4 w-4 mr-2 rtl:ml-2" />
          {t('Transfer Now')}
        </button>
              </form>
      </div>
    </div>
  )
}

export default TransferForm