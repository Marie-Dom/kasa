import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import datas from "../../datas/logements.json";
import Header from "../../components/header/Header";
import Slider from "../../components/carrousel/Carrousel";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/collapse/Collapse";
import greyStar from "../../assets/star-inactive.png";
import redStar from "../../assets/star-active.png";

// Création de la fonction Letting() pour récupérer toutes les informations relatives aux logements à louer
export default function Letting() {
  const [imageSlider, setImageSlider] = useState([]);

  // utilisation de la fonction filter() pour filtrer les données et récupérer à l'aide de l'id, la donnée souhaitée
  const idLetting = useParams("id").id;
  const dataCurrentLetting = datas.filter((data) => data.id === idLetting);

  // utilisation du hook useEffect pour créer un effet de bord permettant d'afficher les photos de la donnée choisie par son id
  useEffect(() => {
    const dataCurrentLetting = datas.filter((data) => data.id === idLetting);
    setImageSlider(dataCurrentLetting[0].pictures);
  }, [idLetting]);

  // Redirection vers la page d'erreur en cas d'id erronée
  if (dataCurrentLetting[0] === undefined) {
    return <Navigate to="*" replace={true} />;
  }

  // Récupération des informations de l'hôte (nom, les avis, description du logement et des équipements)
  const name = dataCurrentLetting[0].host.name.split(" ");
  const rating = dataCurrentLetting[0].rating;
  const description = dataCurrentLetting[0].description;
  const equipments = dataCurrentLetting[0].equipments;

  // Création du Dom avec appel des composants importés pour affichage de la page
  return (
    <>
      <Header />
      <Slider imageSlider={imageSlider} />
      {/* Ajout du contenu des locations d'appartement dans le Dom */}
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
          {/* Ajout des informations de l'hôte, loueur du logement */}
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
            {/* Mise en place des étoiles traduisant l'avis des utilisateurs dans le Dom */}
            <div className="letting_content_host_stars">
              {[...Array(5)].map((_star, index) => {
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
        {/* Mise en place du menu déroulant dans le Dom */}
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
