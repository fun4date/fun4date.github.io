"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/components/ResearchFilter";
import Link from "next/link";
import { mypublications } from "@/constants/publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Research() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [state, setState] = useState({
    papers: mypublications,
    search: "",
    year: undefined,
    type: undefined,
    papersToShow: 6, // Number of papers to show initially
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { papers, search, year, type, papersToShow } = state;

  let papersFiltered = papers.filter((paper) => {
    return (
      (!search ||
        search
          .toLowerCase()
          .replace(new RegExp(/\s/g), "")
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/æ/g), "ae")
          .replace(new RegExp(/ç/g), "c")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/ñ/g), "n")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/œ/g), "oe")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(new RegExp(/[ýÿ]/g), "y")
          .replace(new RegExp(/\W/g), "")
          .split(" ")
          .every((item) =>
            paper.content
              .toLowerCase()
              .replace(new RegExp(/\s/g), "")
              .replace(new RegExp(/[àáâãäå]/g), "a")
              .replace(new RegExp(/æ/g), "ae")
              .replace(new RegExp(/ç/g), "c")
              .replace(new RegExp(/[èéêë]/g), "e")
              .replace(new RegExp(/[ìíîï]/g), "i")
              .replace(new RegExp(/ñ/g), "n")
              .replace(new RegExp(/[òóôõö]/g), "o")
              .replace(new RegExp(/œ/g), "oe")
              .replace(new RegExp(/[ùúûü]/g), "u")
              .replace(new RegExp(/[ýÿ]/g), "y")
              .replace(new RegExp(/\W/g), "")
              .includes(item)
          )) &&
      (!year ||
        (paper.date && paper.date[0] && paper.date[0].toString() === year)) &&
      (!type || (paper.type && paper.type === type))
    );
  });

  const handleLoadMore = () => {
    setState((prevState) => ({
      ...prevState,
      papersToShow: prevState.papersToShow + 3,
    }));
  };

  return (
    <div className={"research page_" + currentLang}>
      <Header route={"/research"} />

    <motion.div className="body"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}>
    <div
        className="banner"
        id="banner-publications"
      >
        <h1>{t("publications.title")}</h1>
        <p>
          Este apartado es una recopilación de las publicaciones del equipo de
          la UPM y de la UC3M. Las publicaciones de la UPM están centrados en el
          tema de computación bla bla bla etc y los de la UC3M se centran en
          sistemas de redes de no se cuantitos.
        </p>
      </div>
      <main>
        <section className="research standard_margin">
          <Filters
            search={search}
            year={year}
            type={type}
            papers={papers}
            changeSearch={(search) => setState({ ...state, search: search })}
            changeYear={(year) => setState({ ...state, year: year })}
            changeType={(type) => setState({ ...state, type: type })}
            results={
              papersFiltered instanceof Array ? papersFiltered.length : 0
            }
          />
          <div className="papers ">
            {papersFiltered
              .slice(0, papersToShow)
              .map(({ date, doi, author, title, journal }, ind) => {
                return (
                  <div key={ind} className="paper">
                    <div className="paper_main">
                      <div className="paper_date">
                        <p className="year">{date ? date[0] : ""}</p>
                        <span className="gradient_bg"></span>
                      </div>
                      <div className="paper_content justify-between">
                        <div className="">
                        <div className="paper_title">
                          <h4>{title}</h4>
                        </div>
                        <div className="paper_subtitle">
                          <p>
                            {author}. {journal}
                          </p>
                        </div>
                        </div>
                        <div className="button_container">
                          {doi ? (
                            <button className="paper_link text-nowrap">
                              <Link
                                rel="noopener noreferrer"
                                target="_blank"
                                href={doi}
                              >
                                <span>{t("publications.button")}</span>
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare}
                                />
                              </Link>
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="load_more">
            {papersFiltered.length > papersToShow && (
              <button onClick={handleLoadMore}>
                {t("publications.button2")}
              </button>
            )}
          </div>
        </section>
      </main>
    </motion.div>
      <Footer />
    </div>
  );
}
