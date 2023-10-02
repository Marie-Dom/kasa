import datas from "../../datas/logements.json";
import Card from "../card/Card";

export default function Gallery() {
  return (
    <main className="home_gallery">
      {/* utilisation de la fonction map() pour récupérer les données */}
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
}
