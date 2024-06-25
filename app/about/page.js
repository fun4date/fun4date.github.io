"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function About(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className={"about page_"+ currentLang}>
      <Header route={"/about"} />
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <h1>{t("contact.title")}</h1>
      </div>
      <main className=" xs:my-4 sm:mx-8 md:mx-14  lg:mx-36 xl:mx-44 2xl:mx-60 2xl:my-20 xl:my-16 lg:my-12 md:my-8 sm:my-4 xs:my-2">
        <section className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg about_description text-slate-700">
          <p>
          {t("contact.body")}
          </p>
        </section>
        <section className="contact_info ">
          <div className="contact col1">
            <div className="contact_title">
              <h4>{t("contact.title2")}</h4>
            </div>
            <div className="contact_content ">
              <ul  className="text-slate-700">
                <li>
                  <h5>
                    <FontAwesomeIcon className="icon" icon={faAt} />
                    E-mail
                  </h5>
                  <p>enrique.barra@upm.es</p>
                </li>
                <li>
                  <h5>
                    {" "}
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    {t("contact.listTitle2")}
                  </h5>
                  <p>91 336 73 31</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="location col2">
            <div className="location_title">
              <h4>
                {" "}
                <FontAwesomeIcon className="icon" icon={faLocationDot} />{" "}
                {t("contact.title3")}
              </h4>
            </div>
            <div className="location_info ">
              <div className="location_map map-responsive">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0248536844406!2d-3.7286225846430923!3d40.45258687936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422834b7a8fb4d%3A0x2a3c66a12ada73f9!2sUPM+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+de+Telecomunicaci%C3%B3n!5e0!3m2!1ses!2ses!4v1561459882911!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowfullscreen
                ></iframe>
              </div>
              <div className="map_info 2xl:my-20 xl:my-16 lg:my-12 md:my-8 sm:my-4 xs:my-2">
                {" "}
                <p>E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN</p>
                <p>Av. Complutense, 30, 28040 Madrid Edificio B</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
