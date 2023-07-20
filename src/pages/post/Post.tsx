import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import "./Post.scss";
import "../../components/header/Header.scss";

type UrlParams = {
  id: string;
};

interface BlogProps {
  id: number;
  title: string;
  desc: string;
  author: string;
  category: string;
  cover: string;
  date: string;
}

const Post = () => {
  const { t, i18n } = useTranslation(["blog"]);
  const blog = t("list", { returnObjects: true }) as [];
  const { id } = useParams<UrlParams>();
  const [blogs, setBlogs] = useState<BlogProps | null>(null);
  const history = useHistory();

  useEffect(() => {
    let blogs = blog.find((blogs: BlogProps) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <>
      {blogs ? (
        <section className="singlePost">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
            <div className="right">
              <div className="buttons">
                <div onClick={() => history.goBack()} className="backButton">
                  <RiArrowLeftSLine className="icon" />
                  <span>{t("back")}</span>
                </div>
              </div>
              <h1>{blogs.title}</h1>
              <div className="autorInfo">{`${blogs.date} · By ${blogs.author}, ${blogs.category}`}</div>
              <p>{blogs.desc}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Post;
