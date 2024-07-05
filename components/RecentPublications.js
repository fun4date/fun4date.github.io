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
    <div className="papers">
      {papers
        .filter((paper) => {
          return paper.type === "article-journal";
        })
        .filter((i, index) => index < 4)
        .map(
          (
            { doi, title, author, date, journal, ind, stroke, content },
            index
          ) => {
            return (
              // <a
              //   key={doi}
              //   href={doi}
              //   target="_blank"
              //   rel="noopener noreferrer"
              // >
              <div key={ind} className="paper">
                <div className="paper_main">
                  <div className="paper_date">
                    <p className="year">{date ? date[0] : ""}</p>
                    <span className="gradient_bg"></span>
                  </div>
                  <div className="paper_content">
                    <div>
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
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </Link>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              // </a>
            );
          }
        )}

      
    </div>
  );
}
