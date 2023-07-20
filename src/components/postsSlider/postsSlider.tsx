import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PostsSlider.scss";

type SampleArrowProps = {
  onClick?: React.MouseEventHandler;
};

type blogsProps = {
  id: number;
  author: string;
  title: string;
  desc: string;
  category: string;
  cover: string;
  date: string;
};

const SampleNextArrow = ({ onClick }: SampleArrowProps) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = ({ onClick }: SampleArrowProps) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
};
const PostsSlider = () => {
  const { t } = useTranslation(["blog"]);
  const blogs = t("list", { returnObjects: true }) as [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="sliderContainer">
        <div className="content">
          <Slider {...settings}>
            {blogs.map((item: blogsProps) => {
              return (
                <div className="boxs" key={item.id}>
                  <Link to={`/posts/${item.id}`} className="link">
                    <div className="box">
                      <img src={item.cover} alt="cover" />
                      <div className="overlay">
                        <h4>{item.category}</h4>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default PostsSlider;
