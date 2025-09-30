import React from 'react'

const Loader:React.FC = ()=>{
  return (
    <div className="flex items-center justify-center h-screen w-full">
        <div className="animate-pulse">
            <span className="font-interBlack rtl:font-danaBlack text-7xl font-black text-secondary dark:text-white">Loading ...</span>
        </div>
    </div>
  )
}

export default Loader