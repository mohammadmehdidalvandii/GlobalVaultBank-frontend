import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from '@radix-ui/react-tabs'
import { Eye } from "lucide-react";

const AccountDetailsModel: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn primary">
          <Eye className="h-4 w-4 mr-2" />
          Details
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog_overlay"/>
        <Dialog.Content className="dialog_content sm:max-w-[800px] bg-white dark:bg-primary-100 border-border max-h-[90vh] overflow-y-auto">
            <div className="dialog_header">
                <Dialog.Title className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-2xl font-interBlack rtl:font-danaBlack text-primary dark:text-white">
                        <Eye className="h-5 w-5"/>
                        Account Details - your name
                    </div>
                    <div className="badge badge_default">Active</div>
                </Dialog.Title>
            </div>
            <Tabs.Root defaultValue="overview" className="w-full">
                <Tabs.List className="tablist w-full grid-cols-4 justify-between bg-gray-light">
                    <Tabs.Trigger value="overview" className="tabTrigger">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="transactions" className="tabTrigger">Transaction</Tabs.Trigger>
                    <Tabs.Trigger value="settings" className="tabTrigger">Settings</Tabs.Trigger>
                    <Tabs.Trigger value="security" className="tabTrigger">Security</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="overview" className="tabContent">this is overview</Tabs.Content>
                <Tabs.Content value="transactions" className="tabContent">this is transactions</Tabs.Content>
                <Tabs.Content value="settings" className="tabContent">this is settings</Tabs.Content>
                <Tabs.Content value="security" className="tabContent">this is security</Tabs.Content>
            </Tabs.Root>
            
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AccountDetailsModel;
