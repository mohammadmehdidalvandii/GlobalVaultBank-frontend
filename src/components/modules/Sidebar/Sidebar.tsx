import React from "react";
import {
  Building2,
  LayoutDashboard,
  Wallet,
  ArrowUpDown,
  CreditCard,
  TrendingUp,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@services/authServices";
import { showError, showSuccess } from "@utils/Toasts";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Accounts", href: "/Accounts", icon: Wallet },
  { name: "Transactions", href: "/Transactions", icon: CreditCard },
  { name: "Transfer", href: "/Transfer", icon: ArrowUpDown },
  { name: "Exchange", href: "/Exchange", icon: TrendingUp },
  { name: "Settings", href: "/Settings", icon: Settings },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const {t} = useTranslation();

  const mutation = useMutation({
    mutationFn:logout,
    onSuccess: ()=>{
      showSuccess("Logout is Successfully");
       window.location.replace('/Login')
    },
    onError:(error)=>{
      showError(`${error.message}`)
    }
  });


  const handlerLogout:React.MouseEventHandler = ()=>{
    mutation.mutate()
  }


  return (
    <div className="h-screen bg-white dark:bg-primary-100 border-r rtl:border-l border-border dark:border-muted flex flex-col shadow-card">
      <div className="p-6 border-b border-border dark:border-muted">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 gradient_primary rounded-lg">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl  font-interBlack dark:text-white">{t('Global Vault')}</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-lg font-interRegular rtl:font-danaRegular transition-all duration-200 ${
                    isActive
                      ? "bg-secondary text-white shadow-banking"
                      : "text-muted hover:text-primary dark:hover:text-white"
                  }`}
                >
                    <item.icon className="h-5 w-5"/>  
                    {t(item.name )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="btn danger w-full bg-red mb-2  items-center-safe font-interBold rtl:font-danaBold"
      type="button"
      onClick={handlerLogout}
      >
        <LogOut className="h-5 w-5"/>
        {t('Exit')}
      </button>
      <div className="p-4 border-t border-border dark:border-muted">
        <div className="text-xs text-muted text-center">
             © 2025 {t('Global Vault Bank')}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
