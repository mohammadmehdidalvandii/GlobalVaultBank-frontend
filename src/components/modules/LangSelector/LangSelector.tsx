import React, {useEffect} from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import {useTranslation} from 'react-i18next'

const LangSelector: React.FC = () => {
  const {i18n} = useTranslation();

  useEffect(()=>{
    document.documentElement.classList.toggle('rtl', i18n.language === 'fa');
  },[]);

  const handlerLanguageChange = (value:string)=>{
    const newLanguage = value;
    i18n.changeLanguage(newLanguage);
    document.dir = newLanguage === 'fa' ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
    document.documentElement.classList.toggle('rtl',newLanguage === 'fa')
  }


  return (
    <Select.Root defaultValue="en" onValueChange={handlerLanguageChange}>
      <Select.Trigger className="inline-flex items-center justify-between text-primary dark:text-white px-3 py-2 border border-border dark:border-muted rounded-md w-16 bg-white dark:bg-primary-100">
        <Select.Value />
        <Select.Icon>
          <ChevronDown className="w-4 h-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-white dark:bg-primary-100 border border-border dark:border-muted rounded-md shadow-md">
          <Select.ScrollUpButton className="flex items-center justify-center h-6">
            <ChevronUp className="w-4 h-4" />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1">
            <Select.Item
              value="en"
              className="flex items-center text-primary dark:text-white px-2 py-1 border-none rounded-sm outline-none cursor-pointer hover:bg-gray-sidebar hover:text-white dark:hover:bg-muted"
            >
              <Select.ItemText>EN</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="esp"
              className="flex items-center text-primary dark:text-white px-2 py-1 border-none rounded-sm outline-none cursor-pointer hover:bg-gray-sidebar hover:text-white dark:hover:bg-muted"
            >
              <Select.ItemText>ESP</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="fa"
              className="flex items-center text-primary dark:text-white px-2 py-1 border-none rounded-sm outline-none cursor-pointer hover:bg-gray-sidebar hover:text-white dark:hover:bg-muted"
            >
              <Select.ItemText>فا</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center h-6">
            <ChevronDown className="w-4 h-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LangSelector;
