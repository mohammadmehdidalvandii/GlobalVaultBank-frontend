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
      <Select.Trigger  className="select_trigger ">
        <Select.Value />
        <Select.Icon asChild>
          <ChevronDown className="w-4 h-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="select_content ">
          {/* <Select.ScrollUpButton className="select_scrollUpBtn">
            <ChevronUp className="w-4 h-4" />
          </Select.ScrollUpButton> */}

          <Select.Viewport className="select_viewPort">
            <Select.Item
              value="en"
              className="select_item"
            >
              <Select.ItemText>EN</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="esp"
              className="select_item"
            >
              <Select.ItemText>ESP</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="fa"
              className="select_item"
            >
              <Select.ItemText>فا</Select.ItemText>
              <Select.ItemIndicator className="ml-auto">
                <Check className="w-4 h-4" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>

          {/* <Select.ScrollDownButton className="select_scrollDownBtn">
            <ChevronDown className="w-4 h-4" />
          </Select.ScrollDownButton> */}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LangSelector;
