import { useTranslation } from 'react-i18next';

const useLangue = () => {

    const { t, i18n } = useTranslation();
    const toggleLangue = () => i18n.language === "en" ? i18n.changeLanguage("fr") : i18n.changeLanguage("en")
    const currentLangue = i18n.language
    return{
        t,toggleLangue,currentLangue
    }
}
export default useLangue