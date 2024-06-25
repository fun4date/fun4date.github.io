"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridElement from "@/components/gridElement";
import RecentPublications from "@/components/RecentPublications";
import Link from "next/link";
import { mycarousel } from "@/constants/carousel.js";
import BulletElement from "@/components/BulletElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className={"home_page page_" + currentLang}>
        <Header route={"/"} />
        <div className="parallax_layer parallax__layer--base">
          <main>
            <section className="home">
              <div className="head block sm:flex sm:flew-row items-center py-8 sm:py-12 md:py-20 lg:py-24 2xl:py-32">
                <div className="group_description flex flex-col gap-4 sm:justify-center md:gap-8 sm:items-center mx-8 sm:mx-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24 sm:w-2/5">
                  <img
                    className="logo_home mt-4 sm:mt-0 self-start w-full"
                    src="assets/img/iso_logo.svg"
                  />
                  <h2 className="text-white self-start">{t("front.title")}</h2>
                  <button className="action_button self-start">
                    <Link rel="noopener noreferrer" target="_blank" href="#">
                      <span>{t("front.action-button")}</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </button>
                </div>
                <div className="banner_f4d_img sm:mt-0 sm:w-3/5" />
              </div>

              <div className="body">
                <section className="project_description">
                  <div className="xl_margin">
                    <h2>{t("front.projectTitle")} </h2>
                    <h5>{t("front.projectSubtitle")} </h5>
                    <p>{t("front.projectDescription")} </p>
                  </div>
                </section>
                <section className="standard_margin">
                  <div className="flex flex-col gap-4 md:gap-12">
                    <h2 className="text-left md:text-center">
                      {t("front.sectionHomeTitle")}
                    </h2>
                    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12">
                      <p className="basis-2/3">{t("front.sectionHomeBody")}</p>
                      <h4 className="basis-1/3 font-semibold">
                        {t("front.sectionHomeSubtitle")}
                      </h4>
                    </div>
                  </div>
                </section>
                <section className="latest_publications standard_margin">
                  <h3>{t("front.latestPublicationsTitle")}</h3>
                  <div className="recent_pubs_container">
                    <RecentPublications />
                  </div>
                </section>
             
              
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
