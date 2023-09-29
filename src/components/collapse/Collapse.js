import arrow from "../../assets/arrow-up.png";
import { useState } from "react";

// Création du menu déroulant
export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);
  // au clic de l'utilisateur, avec la fonction setToggle, cela montre ou cache les informations relatives au logement
  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}

          {/* Mise en place de la flèche montante ou descendante */}
          <img
            className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>
  );
}
