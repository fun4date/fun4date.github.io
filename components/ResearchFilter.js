"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Filters(props) {
  const { t } = useTranslation();

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
    <motion.div
      className="filters"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="filter"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
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
      </motion.div>
      <motion.div
        className="filter"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <label className="publicationType" htmlFor="publication" onClick={()=> setShowPublication(!showPublication)}>
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
      </motion.div>
      <motion.div
        className="filter"
        id="filter_year"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
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
      </motion.div>
      {props.results === undefined ? null : (
        <motion.div
          className="research_results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="">
            {t("publications.filter.text")}
            <b> {props.results} </b>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
