"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { myteam } from "@/constants/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Team(props) {
  const [team, setTeam] = useState(myteam);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    //window.scrollTo(0, 0);
  }, []);

  const renderMembers = (members) => {
    return members.map(
      ({
        name,
        description,
        role,
        position,
        photo,
        github,
        email,
        center,
        translationKey,
      }) => {
        const emailAddress = email ? email.split("@") : null;
        const translatedRole = t(`${translationKey}`);
        const translatedPosition = t(position);
        return (
          <div className="teammate" key={name}>
            <div className="mate_img">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <img
                  alt={"Team member"}
                  src={process.env.PUBLIC_URL + photo}
                  className="grayscale"
                />
              </a>
            </div>
            <div className="mate_info">
              <div className="mate_name">
                <h5>{name}</h5>
              </div>
              {/* <div className="mate_role">
                <span>
                  <small>{translatedRole}</small>{" "}
                </span>
              </div> */}
              {/* position */}
              {/* {position ? (
                <div className="mate_position">
                  <p>{center}</p>
                </div>
              ) : null} */}
              {/* mail */}
              {/* <div className="mate_email">
                <small>{email}</small>
              </div> */}
              {/* description */}
              <div className="mate_coordination">
              <span className={position === "Coordinator" ? "coordinator" : ""}>
                  {translatedRole} {translatedPosition}
                </span>
              </div>
              {/* description */}
              {/* {description ? (
                <div className="mate_description">
                  <p>{description}</p>
                </div>
              ) : null} */}
            </div>
          </div>
        );
      }
    );
  };

  return (
    <div className={"team page_" + currentLang}>
      <Header route={"/team"} />
      
      <motion.div
                  className="body"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
        <div className="banner">
        <h1>{t("team.title")}</h1>
      </div>
        <main>
        <h2 className="text-left standard_margin-x">UC3M</h2>
        <p className="standard_margin mt-0">{t("team.description1")}</p>
        <section className="teammates">
          {team["UC3M Team"]?.members ? renderMembers(team["UC3M Team"].members) : <p>No members found.</p>}
        </section>
        <h2 className="text-left standard_margin-x">UPM</h2>
        <p className="standard_margin mt-0">{t("team.description2")}</p>
        <section className="teammates">
          {team["UPM Team"]?.members ? renderMembers(team["UPM Team"].members) : <p>No members found.</p>}
        </section>
      </main>
      </motion.div>
      
      <Footer />
    </div>
  );
}
