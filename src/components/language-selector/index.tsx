import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "english" },
  vi: { nativeName: "vietnam" },
} as const;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2">
      {Object.keys(lngs).map((lng) => (
        <button
          className={`${
            i18n.resolvedLanguage === lng ? "bg-primaryLight" : "bg-primary"
          } px-3 rounded  text-white`}
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng as keyof typeof lngs].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
