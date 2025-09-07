import { AlertTriangle, Bell, ChevronDown, Clock, Lock, Settings2, Shield, User } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import * as Switch from "@radix-ui/react-switch";
import * as Separator from "@radix-ui/react-separator";
import React from "react";
import { useTranslation } from "react-i18next";

const Setting: React.FC = () => {
  const {t} = useTranslation()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Employee profile */}
      <div className="card p-2">
        <div className="cardHeader">
          <h3 className="cardTitle flex items-center gap-2">
            <User className="h-5 w-5" />
            {t('Employee Profile')}
          </h3>
        </div>
        <div className="cardContent space-y-4 mt-5">
          <div>
            <label htmlFor="" className="label_style">
              {t('Employee')} ID
            </label>
            <input
              type="text"
              className="input_style"
              defaultValue="EMP-2024-001"
              disabled
            />
          </div>
          <div>
            <label htmlFor="" className="label_style">
              {t('Full Name')}
            </label>
            <input
              type="text"
              className="input_style"
              defaultValue="Sarah Johnson"
            />
          </div>
          <div>
            <label htmlFor="" className="label_style">
              {t('Department')}
            </label>
            <Select.Root defaultValue="" disabled>
              <Select.Trigger className="select_trigger mt-2">
                <Select.Value placeholder="customer-service" />
                <Select.Icon>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="select_content">
                  <Select.Viewport className="select_viewPort">
                    <Select.Item
                      value="customer-service"
                      className="select_item p-2"
                    >
                      <Select.ItemText>Customer Service</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="teller" className="select_item p-2">
                      <Select.ItemText>Teller Operations</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="loans" className="select_item p-2">
                      <Select.ItemText>Loan Department</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="compliance" className="select_item p-2">
                      <Select.ItemText>Compliance</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="management" className="select_item p-2">
                      <Select.ItemText>Management</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div>
            <label htmlFor="" className="label_style">
              {t('Position')}
            </label>
            <input
              type="text"
              className="input_style"
              defaultValue="Senior Customer Relations Officer "
              disabled
            />
          </div>
          <button className="btn secondary w-full h-12">{t('Update Profile')}</button>
        </div>
      </div>
      {/* System access Security */}
      <div className="card p-2">
        <div className="cardHeader">
          <h3 className="cardTitle flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {t('System Access & Security')}
          </h3>
        </div>
        <div className="cardContent mt-5">
          <div className="flex items-center justify-between mt-6">
            <div>
              <label htmlFor="#" className="label_style">
                {t('Access level')}
              </label>
              <p className="text-muted">
                {t("Level 3 - Customer Service Representative")}
              </p>
            </div>
            <button className="btn primary w-[170px]">{t('View Permissions')}</button>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <label htmlFor="#" className="label_style">
                {t('Multi-Factor Authentication')}
              </label>
              <p className="text-muted">{t('Required for banking operations')}</p>
            </div>
            <Switch.Root className="switchRoot">
              <Switch.Thumb className="switchThumb" />
            </Switch.Root>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <label htmlFor="#" className="label_style">
                {t('Session Timeout')}
              </label>
              <p className="text-muted">{t('Auto-logout after inactivity')}</p>
            </div>
            <Select.Root defaultValue="">
              <Select.Trigger className="select_trigger mt-2 w-[200px]">
                <Select.Value placeholder="customer-service" />
                <Select.Icon>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="select_content">
                  <Select.Viewport className="select_viewPort">
                    <Select.Item value="15" className="select_item p-2">
                      <Select.ItemText>15 min</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="30" className="select_item p-2">
                      <Select.ItemText>30 min</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="60" className="select_item p-2">
                      <Select.ItemText>60 min</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
            <Separator.Root className="separator h-[1px] w-full mt-2" />
          <div className="flex  justify-between flex-col gap-2 mt-6">
            <label htmlFor="" className="label_style">{t('Change password')}</label>
            <input type="password" className="input_style"  placeholder={t('Current password')}/>
            <input type="password" className="input_style"  placeholder={t('New password')}/>
          </div>
            <button className="btn secondary w-full mt-4 h-12">{t('Update Security')}</button>
        </div>
      </div>
      {/* system Notifications */}
      <div className="card p-2">
        <div className="cardHeader">
            <h3 className="cardTitle flex items-center gap-2">
                <Bell className="h-5 w-5"/>
                {t('System Notifications')}
            </h3>
        </div>
        <div className="cardContent mt-5">
            <div className="flex items-center justify-between mt-3">
                <div>
                <label htmlFor="" className="label_style">{t("Fraud Alerts")}</label>
                <p className="text-muted">{t('High-priority security notifications')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div>
                <label htmlFor="" className="label_style">{t('Transaction Alerts')}</label>
                <p className="text-muted">{t('Large transaction notifications')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div>
                <label htmlFor="" className="label_style">{t('System Maintenance')}</label>
                <p className="text-muted">{t('Scheduled maintenance notifications')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div>
                <label htmlFor="" className="label_style">{t('Policy Updates')}</label>
                <p className="text-muted">{t('Banking policy changes')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className=" mt-3">
                <div>
                <label htmlFor="" className="label_style">{t('Alert Threshold')}</label>
                </div>
                            <Select.Root defaultValue="" >
              <Select.Trigger className="select_trigger mt-2">
                <Select.Value placeholder="customer-service" />
                <Select.Icon>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="select_content">
                  <Select.Viewport className="select_viewPort">
                    <Select.Item
                      value="customer-service"
                      className="select_item p-2"
                    >
                      <Select.ItemText>$10,000 +</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="teller" className="select_item p-2">
                      <Select.ItemText>$25,000 +</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="loans" className="select_item p-2">
                      <Select.ItemText>$50,000 +</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            </div>
        </div>
      </div>
      {/* Work Schedule & shifts */}
      <div className="card p-2">
        <div className="cardHeader">
            <h3 className="cardTitle flex items-center gap-2">
                <Clock className="h-5 w-5"/>
                {t('Work Schedule & Preferences')}
            </h3>
        </div>
        <div className="cardContent">
            <div className="mt-5"> 
                <label htmlFor="#" className="label_style">{t('Current Shift')}</label>
                <Select.Root defaultValue="" >
              <Select.Trigger className="select_trigger mt-2">
                <Select.Value placeholder="customer-service" />
                <Select.Icon>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="select_content">
                  <Select.Viewport className="select_viewPort">
                    <Select.Item
                      value="Morning"
                      className="select_item p-2"
                    >
                      <Select.ItemText>Morning (8:00 AM - 4:00 PM)</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="afternoon" className="select_item p-2">
                      <Select.ItemText>Afternoon (12:00 PM - 8:00 PM)</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="evening" className="select_item p-2">
                      <Select.ItemText>Evening (4:00 PM - 12:00 AM)</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            </div>
            <div className="flex items-center justify-between mt-5">
                <div>
                    <label htmlFor="#" className="label_style">{t('Break Reminders')}</label>
                    <p className="text-muted">{t('Automatic break notifications')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
                        <div className="mt-5"> 
                <label htmlFor="#" className="label_style">{t('Time Zone')}</label>
                <Select.Root defaultValue="" >
              <Select.Trigger className="select_trigger mt-2">
                <Select.Value placeholder="utc-5" />
                <Select.Icon>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="select_content">
                  <Select.Viewport className="select_viewPort">
                    <Select.Item
                      value="utc-8"
                      className="select_item p-2"
                    >
                      <Select.ItemText>Pacific Time</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="utc-5" className="select_item p-2">
                      <Select.ItemText>Eastern Time</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="utc+0" className="select_item p-2">
                      <Select.ItemText>GMT</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="utc+3:30" className="select_item p-2">
                      <Select.ItemText>Iran Time</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            </div>
        </div>
      </div>
      {/* System Permission */}
      <div className="card p-2">
        <div className="cardHeader">
            <h3 className="cardTitle flex items-center gap-2">
                <User className="h-5 w-5"/>
                {t('System Permissions')}
            </h3>
        </div>
        <div className="cardContent">
            <div className="flex items-center justify-between mt-4">
                <div>
                    <label htmlFor="#" className="label_style">{t('Customer Account Access')}</label>
                    <p className="text-muted mt-0">{t('View and modify customer accounts')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <label htmlFor="#" className="label_style">{t('Transaction Processing')}</label>
                    <p className="text-muted mt-0">{t('Process deposits and withdrawals')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <label htmlFor="#" className="label_style">{t('Loan Application Review')}</label>
                    <p className="text-muted mt-0">{t('Review and approve loan applications')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <label htmlFor="#" className="label_style">{t('Compliance Reports')}</label>
                    <p className="text-muted mt-0">{t('Generate regulatory reports')}</p>
                </div>
                <Switch.Root className="switchRoot">
                    <Switch.Thumb className="switchThumb"/>
                </Switch.Root>
            </div>
            <Separator.Root className="separator h-[1px] w-full mt-2" />
            <button className="btn primary w-full h-12 mt-4">
                <AlertTriangle className="h-4 w-4 mr-2"/>
                {t('Request Additional Access')}
            </button>
        </div>
      </div>
      {/* System Integration */}
      <div className="card p-2">
        <div className="cardHeader">
            <h3 className="cardTitle flex items-center gap-2">
                <Settings2 className="h-5 w-5"/>
                {t('System Integration')}
            </h3>
        </div>
        <div className="cardContent">
            <div className="flex items-center justify-between mt-5">
                <div>
                    <label htmlFor="#" className="label_style">{t('Core Banking System')}</label>
                    <p className="text-muted">{t('Connected to MainFrame v12.5')}</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between mt-5">
                <div>
                    <label htmlFor="#" className="label_style">{t('Compliance Module')}</label>
                    <p className="text-muted">{t('Real-time monitoring active')}</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between mt-5">
                <div>
                    <label htmlFor="#" className="label_style">{t('Customer CRM')}</label>
                    <p className="text-muted">{t('Salesforce integration')}</p>
                </div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>
            <Separator.Root className="separator h-[1px] w-full mt-2" />
            <button className="btn primary w-full h-12 mt-5">
                <Lock className='h-4 w-4 mr-2'/>
                {t('System Diagnostic')}
            </button>
            <div className="text-muted text-sm mt-2">{t('Last system check : Today at')} 3:42 PX</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
