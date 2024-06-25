"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithubAlt,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer(props) {
  const { t } = useTranslation();
  const routes = [
    { route: "/research", key: "nav.item" },
    { route: "/courses", key: "nav.item2" },
    { route: "/tools", key: "nav.item3" },
    { route: "/project", key: "nav.item4" },
    { route: "/team", key: "nav.item5" },
    { route: "/about", key: "nav.item6" },
  ];
  return (
    <footer>
      <div className="container_line_1">
        <div className="footer_left ">
          <div className="footer_title">
            <h1>FuN4DaTe</h1>
          </div>
          <div className="footer_subtitle">
            <h5 className="font-medium">
              {t("footer.logoSub")}
              <br></br>
            </h5>
          </div>
          {/*}  <div className="flex">
          <FontAwesomeIcon className="mr-3" icon={faEnvelope} size="lg" />{" "}
          <div className="footer_email"> enrique.barra@upm.es</div>
        </div>*/}
        </div>

        
          {" "}
          {/*<nav>
          <ul>
            <li className="sections_title smallcaps text-left mb-4">
              {t("footer.title1")}
            </li>
            {routes.map((route, index) => (
              <li
                key={index}
                className={
                  route.route === props.route
                    ? "li-selected text-left mb-2 font-medium md:text-"
                    : "text-left mb-2 font-medium"
                }
              >
                <Link className="font-medium" href={route.route}>
                {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>  */}
   
        <div className="footer_mid">
          <div className="footer_img_container_funder">
            <p>{t("footer.title2")}</p>
            <img
           
              src="assets/img/footer/financiador.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="footer_mid">
          <div className="footer_img_container_partners">
            <p>{t("footer.title3")}</p>
            <div>
              
              <img
            
                src="assets/img/footer/UC3M-logo.png"
                alt="logo"
              />
              <img
            
                src="assets/img/footer/UPM-logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        {/*
      <div className="footer_mid_2">
       <div className="socials">
          <div className="socials_title smallcaps mb-4 text-left">
            {t("footer.title2")}
          </div>
          <ul>
            <li className="mb-2 text-left ">
              <Link
                className="font-medium"
                href="https://github.com/CyberAula/"
                target="_blank"
              >
                <FontAwesomeIcon className="mr-2 " icon={faGithubAlt} />
                Github
              </Link>
            </li>
            <li className="mb-2 text-left">
              <Link
                className="font-medium"
                href="https://www.youtube.com/@ging-upm"
                target="_blank"
             >
                <FontAwesomeIcon className="mr-2 " icon={faYoutube} />
                Youtube
              </Link>
            </li>
            <li className="mb-2 text-left">
              <Link
                className="font-medium"
                target="_blank"
                href="https://x.com/cyberaula"
              >
                <FontAwesomeIcon className="mr-2 " icon={faTwitter} />
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
*/}
      </div>
      <div>
        <div className="footer_right size-full">
          <div className="copyright">
            {" "}
                <a
                  className="font-normal text-base"
                  rel="noopener noreferrer"
                  href="http://www.dit.upm.es/"
                  target="_blank"
                >
                  {t("footer.titleRight")}
                </a>
                <a
                  className="font-normal text-base"
                  rel="noopener noreferrer"
                  href="http://www.etsit.upm.es/de.html"
                  target="_blank"
                >
                 
                </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
