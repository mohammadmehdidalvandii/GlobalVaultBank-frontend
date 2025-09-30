import React from 'react';
import { X ,  Menu} from 'lucide-react'
import { headerProps } from '../../../types/header';
import BtnTheme from '../BtnTheme/BtnTheme';
import LangSelector from '../LangSelector/LangSelector';
import {useTranslation} from 'react-i18next'


const Header:React.FC<headerProps> = ({handlerSidebar , icon}) => {
    const {t} = useTranslation()
  return (
    <header className='bg-white dark:bg-primary-100 w-full border-b border-border dark:border-muted h-16 flex items-center justify-between px-6 shadow-card'>
        <div className="flex flex-items gap-4">
            <button type='button' className="btn"
            onClick={handlerSidebar}
            >
                {icon ? <X/> :<Menu/>}
            </button>
            <h1 className="text-xl font-bold text-primary-100 dark:text-white">{t('Global Vault Bank')}</h1>
        </div>
        <div className="flex item-center gap-3">
            <LangSelector/>
            <BtnTheme/>
            {/* need develop */}
            {/* <button className="btn">
                <User/>
            </button> */}
        </div>
    </header>
  )
}

export default Header