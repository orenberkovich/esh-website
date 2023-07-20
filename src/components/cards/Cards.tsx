import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Cards.scss";

type blogsProps = {
  id: number;
  author: string;
  title: string;
  desc: string;
  category: string;
  cover: string;
  date: string;
};

const Cards = () => {
  const { t } = useTranslation(["blog"]);
  const blogs = t("list", { returnObjects: true }) as [];

  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {blogs.map((item: blogsProps) => (
            <div className="box boxItems" key={item.id}>
              <Link to={`/posts/${item.id}`} className="link">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
              </Link>
              <div>
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                <Link to={`/posts/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 220)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  <label>{item.date}</label>
                  <AiOutlineComment className="icon" /> <label>27</label>
                  <AiOutlineShareAlt className="icon" /> <label>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cards;
