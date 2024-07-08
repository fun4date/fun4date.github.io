"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Filters(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  function getYears(papers) {
    let yearSet = new Set();
    for (let i in papers) {
      try {
        const date = papers[i].date[0];
        yearSet.add(date.toString());
      } catch (e) {}
    }
    return Array.from(yearSet);
  }

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  let years = getYears(props.papers);

  return (
    <div
      className="filters"
    >
      <div
        className="filter"    
      >
        <label htmlFor="search">{t("publications.filter.fieldTitle")}</label>
        <input
          key={" "}
          type={"text"}
          value={props.search || ""}
          onChange={(e) =>
            props.changeSearch(
              e.target.value === "" ? undefined : e.target.value
            )
          }
        />
      </div>
      <div
        className="filter"
     
      >
        <label className={"publicationType_" + currentLang} htmlFor="publication" onClick={()=> setShowPublication(!showPublication)}>
          {t("publications.filter.fieldTitle2")}
        </label>
        <select
          id="publication"
          name="publication"
          onChange={(e) =>
            props.changeType(
              e.target.value === "all" ? undefined : e.target.value
            )
          }
        >
          <option key={"all"} value={"all"}>
            {t("publications.filter.fieldOpt")}
          </option>
          <option key={"journal"} value={"article-journal"}>
            {t("publications.filter.fieldOpt2")}
          </option>
          <option key={"conference"} value={"paper-conference"}>
            {t("publications.filter.fieldOpt3")}
          </option>
        </select>
      </div>
      <div
        className="filter"
        id="filter_year"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <label id="year_label" htmlFor="year">
          {t("publications.filter.fieldTitle3")}
        </label>
        <select
          id="year"
          name="year"
          onChange={(e) =>
            props.changeYear(
              e.target.value === "all" ? undefined : e.target.value
            )
          }
        >
          <option key={"all"} value={"all"}>
            {t("publications.filter.fieldOpt")}
          </option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      {props.results === undefined ? null : (
        <div
          className="research_results"
       
        >
          <p className="">
            {t("publications.filter.text")}
            <b> {props.results} </b>
          </p>
        </div>
      )}
    </div>
  );
}
