import React, { useState } from 'react';
import * as Dialog  from '@radix-ui/react-dialog';
import { Plus } from 'lucide-react';
import DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { createCustomer } from '@services/customerService';
import { showError, showSuccess } from '@utils/Toasts';
import { customerSchema } from '@validation/customer.validation';


const NewCustomerModel:React.FC = ()=>{
    const {t} = useTranslation()
    const [open , setOpen] = useState<boolean>(false);
    const [firstName , setFirstName] = useState<string>('');
    const [lastName , setLastName] = useState<string>('');
    const [email , setEmail] = useState<string>('');
    const [phone , setPhone] = useState<string>('');
    const [ nationalID, setNationalID] = useState<string>('');
    const [dateOfBirth , setDateOfBirth] = useState<Date|null>(null);
    const [street , setStreet] = useState<string>('');
    const [city , setCity] = useState<string>('');
    const [postalCode , setPostalCode] = useState<string>('');
    const [country , setCountry] = useState<string>('');

    const mutation = useMutation({
        mutationFn:createCustomer,
        onSuccess:()=>{
            showSuccess(t('created customer successfully'))
            window.location.reload()
        },
        onError:(error)=>{
            console.log("error =>" ,error)
            showError(`${error.message}`)
        }
    })

    const handlerFormCustomer:React.FormEventHandler = (e)=>{
        e.preventDefault();

        const result = customerSchema.safeParse({
            firstName,
            lastName,
            email,
            phone,
            nationalID,
            dateOfBirth,
            street,
            city,
            postalCode,
            country,
        });

        if(!result.success){
            console.log(result.error.format)
        }

        mutation.mutate({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            nationalID: nationalID,
            dateOfBirth: dateOfBirth ? dateOfBirth.toISOString().split("T")[0] : null,
            street: street,
            city: city,
            postalCode: postalCode,
            country: country
        });
    }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
            <button className="btn secondary gap-2 w-[150px]">
                <Plus className='h-4 w-4'/>
                {t('New Customer')}
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className='dialog_overlay'/>
            <Dialog.Content className='dialog_content max-w-[600px] bg-white dark:bg-primary-100 border-border'>
                <div className="dialog_header">
                    <Dialog.Title className='dialog_title flex items-center gap-2 dark:text-white font-interBold rtl:font-danaBold'>
                        <Plus className='h-5 w-5'/>
                        {t("Create new Customer")}
                    </Dialog.Title>
                </div>
                <form action="" className="space-y-4 mt-4" onSubmit={handlerFormCustomer}>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t("First Name")}</label>
                            <input type="text" className="input_style mt-2 dark:text-white"
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('Last Name')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('Email')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('Phone')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('National ID')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={nationalID}
                            onChange={(e)=>setNationalID(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('DateOfBirth')}</label>
                            <DatePicker
                            dateFormat='YYYY/MM/DD'
                            minDate={new Date(1940,0 ,1)}
                            selected={dateOfBirth}
                            onChange={(d:Date|null)=>setDateOfBirth(d)}
                            maxDate={new Date()}
                            showYearDropdown
                            scrollableYearDropdown
                            showMonthDropdown
                            scrollableMonthYearDropdown
                            placeholderText='Selected Birthday'
                            className='input_style w-[150%]'
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('Street')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={street}
                            onChange={(e)=>setStreet(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('city')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('PostalCode')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={postalCode}
                            onChange={(e)=>setPostalCode(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="#" className="label_style dark:text-white">{t('Country')}</label>
                            <input type="text" className="input_style mt-2 dark:text-white" 
                            value={country}
                            onChange={(e)=>setCountry(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                        <button type='button' className="btn primary flex-1" onClick={()=>setOpen(false)}>{t('Cancel')}</button>
                        <button type='submit' className="btn secondary flex-1">{t('Create Customer')}</button>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default NewCustomerModel