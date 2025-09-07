import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {  CreditCard, Mail, Phone, Search, User, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const mockCustomers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    accountCount: 3,
    totalBalance: 45670.5,
    status: "Active",
    lastActivity: "2024-01-21",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 987-6543",
    accountCount: 2,
    totalBalance: 28450.75,
    status: "Active",
    lastActivity: "2024-01-20",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "m.brown@email.com",
    phone: "+1 (555) 456-7890",
    accountCount: 1,
    totalBalance: 12300.0,
    status: "Suspended",
    lastActivity: "2024-01-15",
  },
];

const CustomerSearchModel: React.FC = () => {
  const {t} = useTranslation()
  const [open, setOpen] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredCustomer, setFilteredCustomer] = useState(mockCustomers);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn primary gap-2 min-w-[170px] max-w-[150px]">
          <Search />
          {t('Find Customer')}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog_overlay " />
        <Dialog.Content className="dialog_content sm:max-w-[700px] bg-white dark:bg-primary border-border dark:border-muted max-h-[80dvh] overflow-y-auto">
          <div className="dialog_header">
            <Dialog.Title className="dialog_title flex items-center gap-2 font-interBlack font-bold text-primary-100 dark:text-white">
              <Search className="h-5 w-5" />
              {t('Customer Search')}
            </Dialog.Title>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="search"
                className="label_style"
              >
                {t('Search bg name , email , or phone')}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 text-muted" />
                <input
                  type="text"
                  placeholder="Enter customer details ..."
                  className="input_style pl-10 mt-2"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {filteredCustomer.length === 0 ? (
              <div className="text-center py-8 text-muted">
                <User className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="">No Customers found matching your search</p>
              </div>
            ) : (
              filteredCustomer.map((customer) => (
                <div
                  key={customer.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full  gradient_primary flex items-center justify-center text-white font-interRegular rtl:font-danaRegular">
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h3 className="font-danaRegular text-primary dark:text-white">
                            {customer.name}
                          </h3>
                          <div className="flex items-center gap-4 text-lg text-muted">
                            <div className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {customer.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {customer.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                          <div className={`badge ${customer.status === 'Active' ? 'badge_default': 'badge_secondary'}`}>
                            {customer.status}
                          </div>
                      <div className="text-sm text-muted">
                        <div className="flex items-center gap-1 justify-end">
                          <CreditCard className="h-3 w-3" />
                          {customer.accountCount} account
                          {customer.accountCount !== 1 ? "s" : ""}
                        </div>
                        <div className="font-interBold font-bold text-base text-primary">
                          ${customer.totalBalance.toLocaleString()}
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                      <button className="btn primary flex-1">{t('View Details')}</button>
                      <button className="btn primary flex-1">{t('View Accounts')}</button>
                      <button className="btn primary flex-1">{t('Transaction')}</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <Dialog.Close asChild>
            <button className="dialog_close btn cursor-pointer rtl:left-0 ">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomerSearchModel;
