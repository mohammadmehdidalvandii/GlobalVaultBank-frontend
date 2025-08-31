import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardAccount:React.FC = () => {
    const {t} = useTranslation()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        <div className="gradient_primary text-white border-0 p-6 rounded-md ">
            <div className="flex justify-between items-start flex-col mb-2">
                <div>
                    <h3 className="text-base font-interRegular rtl:font-danaRegular">{t("Main Account")}</h3>
                    <p className="text-xs">****7890</p>
                </div>
                <div className="space-y-2 mt-2">
                    <div className="flex items-baseline gap-2">
                        <span className='text-2xl font-interBold'>$25,420.5</span>
                        <span className="text-sm">USD</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="gradient_primary text-white border-0 p-6 rounded-md ">
            <div className="flex justify-between items-start flex-col mb-2">
                <div>
                    <h3 className="text-base font-interRegular rtl:font-danaRegular">{t("Main Account")}</h3>
                    <p className="text-xs">****7890</p>
                </div>
                <div className="space-y-2 mt-2">
                    <div className="flex items-baseline gap-2">
                        <span className='text-2xl font-interBold'>$25,420.5</span>
                        <span className="text-sm">USD</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="gradient_primary text-white border-0 p-6 rounded-md ">
            <div className="flex justify-between items-start flex-col mb-2">
                <div>
                    <h3 className="text-base font-interRegular rtl:font-danaRegular">{t("Main Account")}</h3>
                    <p className="text-xs">****7890</p>
                </div>
                <div className="space-y-2 mt-2">
                    <div className="flex items-baseline gap-2">
                        <span className='text-2xl font-interBold'>$25,420.5</span>
                        <span className="text-sm">USD</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardAccount