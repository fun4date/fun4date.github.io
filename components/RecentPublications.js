"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { mypublications } from "../constants/publications";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function RecentPublications(props) {
  const [papers, setPapers] = useState(mypublications);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="_publications _recent_publications ">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry gutter="24px">
          {papers
            .filter((paper) => {
              return paper.type === "article-journal";
            })
            .filter((i, index) => index < 4)
            .map(({ doi, title, author, date, stroke, content }, index) => {
              return (
                // <a
                //   key={doi}
                //   href={doi}
                //   target="_blank"
                //   rel="noopener noreferrer"
                // >
                  <div key={doi} className={`article`}>
                    <div className={`article_stroke ${stroke}`}></div>
                    <div className="article_content">
                      <div className="article_date">
                        <span><small>{date}</small></span>
                      </div>
                      <h5 className="article_title">{title}</h5>
                      <p className="article_author">{author}</p>
                      {doi ? (
                        <button className="paper_link text-nowrap">
                          <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            href={doi}
                          >
                            <span>{t("publications.button")}</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </Link>
                        </button>
                      ) : null}
                    </div>
                  </div>
                // </a>
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
      <a
        className="flex justify-center"
        href="/research"
        rel="noopener noreferrer"
      >
        <div className="more margin_top_button">
          {t("front.latestPublicationsButton")}
        </div>
      </a>
    </div>
  );
}
