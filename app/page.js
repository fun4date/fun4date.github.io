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
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      
        <div className="App">
      <div className={"home_page page_" + currentLang}>
        <Header route={"/"} />
        <div className="parallax_layer parallax__layer--base">
          <main>
            <section className="home">
            <motion.div className="body"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}>
                                  <div className="head block sm:flex sm:flew-row items-center py-8 sm:py-12 md:py-20 lg:py-24 2xl:py-32">
                <div className="group_description flex flex-col gap-4 sm:items-start md:gap-8  mx-8 sm:mx-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24 sm:w-3/5">
                  <img
                    className="logo_home mt-4 sm:mt-0 self-start w-full"
                    src="assets/img/iso_logo.svg"
                  />
                  <h3 className="self-start">{t("front.title")}</h3>
                  <div className="container_front_description">
                    <p className="front_description ">
                      {t("front.description")}
                    </p>
                    <motion.button
                      className="action_button self-start"
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                    >
                      <Link rel="noopener noreferrer" target="_blank" href="#">
                        <span>{t("front.action-button")}</span>

                        <motion.div
                          animate={{ x: isHovered ? 10 : 0 }} // Adjust '10' to the desired amount of movement
                          transition={{ type: "spring", stiffness: 300 }}
                          style={{ display: "inline-block", marginLeft: "8px" }} // Adjust 'marginLeft' for spacing
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </motion.div>
                      </Link>
                    </motion.button>
                  </div>
                </div>
                <div className="banner_f4d_img sm:mt-0 sm:w-3/5" />
              </div>
                  </motion.div>


              <div className="body">
                <section className="project_description">
                  <div className="xl_margin gap_text">
                    <div>
                      <h2 className="text-left">{t("front.projectTitle")} </h2>

                      <h5 className="text-left sm:text-center">
                        {t("front.projectSubtitle")}{" "}
                      </h5>
                    </div>
                    <p className="text-white">
                      {t("front.projectDescription")}{" "}
                    </p>
                  </div>
                </section>
                <section className="standard_margin">
                  <div className="text-left md:text-center flex flex-col gap-0 sm:gap-4 md:gap-12">
                    <h2 className="text-left md:text-center">
                      {t("front.sectionHomeTitle")}
                    </h2>
                    <div className="flex flex-col-reverse md:text-left md:flex-row gap-0 sm:gap-4 md:gap-12">
                      <p className="basis-2/3">{t("front.sectionHomeBody")}</p>
                      <h4 className="basis-1/3 font-semibold">
                        {t("front.sectionHomeSubtitle")}
                      </h4>
                    </div>
                  </div>
                </section>
                <section className="latest_publications standard_padding ">
                  <h2>{t("front.latestPublicationsTitle")}</h2>
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
    </AnimatePresence>

  );
}
