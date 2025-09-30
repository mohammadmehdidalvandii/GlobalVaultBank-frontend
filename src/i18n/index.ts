import i18next , {Resource} from "i18next";
import { initReactI18next } from "react-i18next";
import sidebarEN from './en/sidebarEN.json'
import sidebarESP from './esp/sidebarESP.json'
import sidebarFA from './fa/sidebarFa.json'
import dashboardEN from './en/dashboardEN.json'
import dashboardESP from './esp/dashboardESP.json'
import dashboardFA from './fa/dashboardFA.json'
import accountEN from './en/AccountEN.json'
import accountESP from './esp/AccountESP.json'
import accountFA from './fa/AccountFA.json'
import transactionEN from './en/transactionEN.json'
import transactionESP from './esp/transactionESP.json'
import transactionFA from './fa/transactionFA.json'
import transferEN from './en/transferEN.json'
import transferESP from './esp/transferESP.json'
import transferFA from './fa/transferFA.json'
import exchangeEN from './en/exchangeEN.json'
import exchangeESP from './esp/exchangeESP.json'
import exchangeFA from './fa/exchangeFA.json'
import settingsEN from './en/settingsEN.json'
import settingsESP from './esp/settingsESP.json'
import settingsFA from './fa/settingsFA.json'
import toastEN from'./en/ToastEN.json'
import toastESP from'./esp/toastESP.json'
import toastFA  from'./fa/toastFA.json'



const resources:Resource = {
    en:{
        translation:{
          ...sidebarEN,
          ...dashboardEN,
          ...accountEN,
          ...transactionEN,
          ...transferEN,
          ...exchangeEN,
          ...settingsEN,
          ...toastEN
        }
    },
    esp:{
        translation:{
        ...sidebarESP,
        ...dashboardESP,
        ...accountESP,
        ...transactionESP,
        ...transferESP,
        ...exchangeESP,
        ...settingsESP,
        ...toastESP,
        }
    },
    fa:{
        translation:{
            ...sidebarFA,
            ...dashboardFA,
            ...accountFA,
            ...transactionFA,
            ...transferFA,
            ...exchangeFA,
            ...settingsFA,
            ...toastFA
        }
    }
}

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
})

export default i18n