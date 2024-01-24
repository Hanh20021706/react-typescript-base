import Button from "@Component/button";
import LanguageSelector from "@Component/language-selector";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-orange-400">{t("home.title")}</h2>
      <p>{t("home.desc")}</p>
      <LanguageSelector />
      <Button />
      <div className="">
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"/products"}>products</NavLink>
        <NavLink to={"/login"}>login</NavLink>
      </div>
    </>
  );
};

export default Home;
