import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Banner() {
  // Création d'un state aboutPage et de la fonction de mise à jour du state : setAboutPage pour l'utilisation du hook : useState()
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  // mise en place d'un effet de bord avec l'utilisation du hook useEffect pour déterminer une action
  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={aboutPage ? "banner_about" : "banner"}>
      {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
}
