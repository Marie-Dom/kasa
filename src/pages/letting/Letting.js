import "./letting.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../datas/datas";
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/collapse/Collapse";
import greyStar from "../../assets/star-inactive.png";
import redStar from "../../assets/star-active.png";

export default function Letting() {
  const [imageSlider, setImageSlider] = useState([]);

  const idLetting = useParams("id").id;
  const dataCurrentLetting = datas.filter((data) => data.id === idLetting);

  useEffect(() => {
    const dataCurrentLetting = datas.filter((data) => data.id === idLetting);
    setImageSlider(dataCurrentLetting[0].pictures);
  }, [idLetting]);

  const name = dataCurrentLetting[0].host.name.split(" ");
  const rating = dataCurrentLetting[0].rating;
  const description = dataCurrentLetting[0].description;
  const equipments = dataCurrentLetting[0].equipments;

  return (
    <>
      <Header />
      <Slider imageSlider={imageSlider} />
      <main className="letting">
        <div className="letting_content">
          <div className="letting_content_infos">
            <h1>{dataCurrentLetting[0].title}</h1>
            <p>{dataCurrentLetting[0].location}</p>
            <div>
              {dataCurrentLetting[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="letting_content_host">
            <div>
              <div className="letting_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentLetting[0].host.picture}
                alt="host of this Letting"
              />
            </div>

            <div className="letting_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="letting_collapse">
          <div className="letting_collapse_item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="letting_collapse_item">
            <Collapse title={"Équipements"} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
