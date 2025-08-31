import Header from '@components/modules/Header/Header';
import Sidebar from '@components/modules/Sidebar/Sidebar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout:React.FC = ()=>{
    const [sideBarOpen , setSideBarOpen] = useState<boolean>(true);
  return (
    <div className='min-h-screen bg-bg dark:bg-primary-100'>
        <div className="flex">
            {/* Sidebar */}
            <div className={`transition-all duration-300 ${sideBarOpen ? 'w-64' : 'w-0 overflow-hidden'} `}>
                <Sidebar/>
            </div>
            {/* main content */}
            <div className="flex-1 flex flex-col">
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