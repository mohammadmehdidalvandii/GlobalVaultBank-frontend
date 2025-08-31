import i18next , {Resource} from "i18next";
import { initReactI18next } from "react-i18next";
import sidebarEN from './en/sidebarEN.json'
import sidebarESP from './esp/sidebarESP.json'
import sidebarFA from './fa/sidebarFa.json'
import dashboardEN from './en/dashboardEN.json'
import dashboardESP from './esp/dashboardESP.json'
import dashboardFA from './fa/dashboardFA.json'


const resources:Resource = {
    en:{
        translation:{
          ...sidebarEN,
          ...dashboardEN
        }
    },
    esp:{
        translation:{
        ...sidebarESP,
        ...dashboardESP
        }
    },
    fa:{
        translation:{
            ...sidebarFA,
            ...dashboardFA
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