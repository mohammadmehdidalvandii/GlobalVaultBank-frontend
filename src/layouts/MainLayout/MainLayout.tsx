import Header from '@components/modules/Header/Header';
import Sidebar from '@components/modules/Sidebar/Sidebar';
import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '@services/authServices';
import { useTranslation } from 'react-i18next';

const MainLayout:React.FC = ()=>{
  const {i18n} = useTranslation()
    const token = getToken();
    const [sideBarOpen , setSideBarOpen] = useState<boolean>(true);

    if( token === null){
      return   <Navigate to='/Login' replace/>
    }
  return (
    <div className='min-h-screen bg-bg dark:bg-primary-100'>
        <div className="flex">
            {/* Sidebar */}
            <div className={`transition-all duration-300 ${sideBarOpen ? 'w-64 fixed' : 'w-0 overflow-hidden'} `}>
                <Sidebar/>
            </div>
            {/* main content */}
            <div className={`flex-1 flex flex-col  ${sideBarOpen ? i18n.language === 'fa' ? 'mr-64':'ml-64':"ml-0 mr-0"}`}>
                <Header handlerSidebar={()=>setSideBarOpen(!sideBarOpen)} icon={sideBarOpen ? true :false}/>
            {/* page content  */}
            <main className="flex-1 p-6">
                    <Outlet/>
            </main>
            </div>
        </div>
    </div>
  )
}

export default MainLayout