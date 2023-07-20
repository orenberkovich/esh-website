import image from "../../assets/images/homebg.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation(["homePage"]);
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="bgimg">
      <div className="middle">
        <h1 className="home-title">{t("title")}</h1>
        <Link to={`/blog/`} className="link">
          <div className="home-button">{t("buttonText")}</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
