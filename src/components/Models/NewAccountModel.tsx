import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const NewAccountModel: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn secondary gap-2 w-[150px]">
          <Plus className="h-4 w-4" />
          {t("New Account")}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog_overlay" />
        <Dialog.Content className="dialog_content max-w-[600px] bg-white dark:bg-primary-100 border-border">
          <div className="dialog_header">
            <Dialog.Title className="dialog_title flex items-center gap-2 dark:text-white">
              <Plus className="h-5 w-5" />
              {t("Create New Customer Account")}
            </Dialog.Title>
            <form action="#" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 sm:grid-col-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="" className="label_style dark:text-white">
                    {t("Customer Name")} *
                  </label>
                  <Select.Root defaultValue="">
                    <Select.Trigger className="select_trigger mt-2 dark:text-white">
                      <Select.Value placeholder={t("Select Customer Name")} />
                      <Select.Icon>
                        <ChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="select_content">
                        <Select.Viewport className="select_viewPort">
                          <Select.Item
                            value="checking"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Checking Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="savings"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Savings Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="business"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Business Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="investment"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Investment Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="corporate"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Corporate Account")}
                            </Select.ItemText>
                          </Select.Item>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>

                <div className="space-y-2">
                  <label htmlFor="" className="label_style dark:text-white">
                    {t("interestRate")}
                  </label>
                  <input
                    type="text"
                    className="input_style mt-2 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="label_style dark:text-white">
                    {t("Account Type")} *
                  </label>
                  <Select.Root defaultValue="">
                    <Select.Trigger className="select_trigger mt-2 dark:text-white">
                      <Select.Value placeholder={t("Select Account Type")} />
                      <Select.Icon>
                        <ChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="select_content">
                        <Select.Viewport className="select_viewPort">
                          <Select.Item
                            value="checking"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Checking Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="savings"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Savings Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="business"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Business Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="investment"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Investment Account")}
                            </Select.ItemText>
                          </Select.Item>
                          <Select.Item
                            value="corporate"
                            className="select_item p-2"
                          >
                            <Select.ItemText>
                              {t("Corporate Account")}
                            </Select.ItemText>
                          </Select.Item>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="label_style dark:text-white">
                    {t("Base Currency")} *
                  </label>
                  <Select.Root defaultValue="">
                    <Select.Trigger className="select_trigger mt-2">
                      <Select.Value placeholder={t("Select Currency")} />
                      <Select.Icon>
                        <ChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="select_content">
                        <Select.Viewport className="select_viewPort">
                          <Select.Item value="USD" className="select_item p-2">
                            <Select.ItemText>USD ($)</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="EUR" className="select_item p-2">
                            <Select.ItemText>EUR (€)</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="GBP" className="select_item p-2">
                            <Select.ItemText>GBP (£)</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="JPY" className="select_item p-2">
                            <Select.ItemText>JPY (¥)</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="CHF" className="select_item p-2">
                            <Select.ItemText>CHF (Fr)</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="CAD" className="select_item p-2">
                            <Select.ItemText>CAD (C$)</Select.ItemText>
                          </Select.Item>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="label_style dark:text-white">
                    {t("Status")} *
                  </label>
                  <Select.Root defaultValue="">
                    <Select.Trigger className="select_trigger mt-2">
                      <Select.Value placeholder={t("Select Status")} />
                      <Select.Icon>
                        <ChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="select_content">
                        <Select.Viewport className="select_viewPort">
                          <Select.Item value="active" className="select_item p-2">
                            <Select.ItemText>{t('Active')}</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="frozen" className="select_item p-2">
                            <Select.ItemText>{t('Frozen')}</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="closed" className="select_item p-2">
                            <Select.ItemText>{t('Closed')}</Select.ItemText>
                          </Select.Item>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="label_style dark:text-white">
                    {t("Initial Deposit")}
                  </label>
                  <input
                    type="number"
                    className="input_style mt-2 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  className="btn primary flex-1"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  {t("Cancel")}
                </button>
                <button className="btn secondary flex-1">
                  {t("Create Account")}
                </button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewAccountModel;
