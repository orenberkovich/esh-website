import logo from "../../assets/images/logo.svg";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GrMenu, GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import "./Header.scss";

type LangProps = {
  en?: string;
  he?: string;
};

const supportedLang: LangProps[] = [{ en: "English" }, { he: "עברית" }];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [langOpen, setLangOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation(["nav"]);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header!.classList.toggle("active", this.window.scrollY > 100);
  });

  const openNav = () => {
    setMobileOpen(!mobileOpen);
  };

  const openLang = () => {
    setLangOpen(!langOpen);
  };

  const handleLangChange = (lang: LangProps) => {
    i18n.changeLanguage(Object.keys(lang)[0]);
    setLangOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="flex">
          <div className="leftMenu">
            <img src={logo} alt="logo" width="100px" className="headerLogo" />
            <div>
              <GrMenu className="mobileMenu" onClick={openNav} />
              <nav className={`${mobileOpen ? "isMobile" : ""}`}>
                <ul>
                  {nav.map((link) => {
                    return (
                      <li key={link.id}>
                        <Link to={link.url}>{t(link.text)}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <GrLanguage className="langMenu" onClick={openLang} />
            {langOpen && (
              <ul className="langContainer">
                {supportedLang.map((lang, index) => {
                  return (
                    <li
                      className={
                        Object.keys(lang)[0] === i18n.language ? "disabled" : ""
                      }
                      key={index}
                      onClick={() => handleLangChange(lang)}
                    >
                      {Object.values(lang)[0]}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
