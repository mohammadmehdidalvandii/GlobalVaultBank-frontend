import Setting from '@components/template/settings/Setting/Setting';
import SettingsHeader from '@components/template/settings/SettingsHeader/SettingsHeader';
import MetaTag from '@hooks/metaTag';
import React from 'react';

const Settings:React.FC  = ()=>{
  return (
    <>
    <MetaTag title='Settings' description='A bank management project for the settings department'/>
    <SettingsHeader/>
    <Setting/>
    </>
  )
}

export default Settings