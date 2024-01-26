import Button from "@Component/button";
import Input from "@Component/input";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { appRouter } from "src/app/router/router";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blackRgba w-full h-[100vh] fixed flex justify-center items-center overflow-x-auto top-0 left-0 right-0 bottom-0">
      <div className="min-w-[600px] bg-black p-[88px] flex flex-col justify-center gap-[40px]">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dkpulhfe7/image/upload/v1706082642/icon/logo_1_znrwjo.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[36px]">
          <Input
            placeholder={t("user.userName")}
            className="bg-translate placeholder:text-white text-white"
          />
          <Input
            placeholder={t("user.email")}
            className="bg-translate placeholder:text-white text-white"
          />
          <Input
            placeholder={t("user.password")}
            className="bg-translate placeholder:text-white text-white"
          />
          <Button title={t("user.create")} />
          <div className="text-white flex justify-end gap-1">
            <p>{t("user.alreadyCreate")}</p>
            <NavLink to={appRouter.LOGIN} className={"text-yellow"}>
              {t("user.login")}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
