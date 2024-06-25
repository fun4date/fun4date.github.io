"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Filters (props) {
	const { t } = useTranslation();
	function getYears(papers) {
		let yearSet = new Set()
		for (let i in papers) {
			try {
				const date = papers[i].date[0];
				yearSet.add(date.toString())
			} catch(e) {
			}
		}
		return Array.from(yearSet);
	}

		let years = getYears(props.papers);		

		return (<div className="filters">
			<div className="filter">
				<label htmlFor="search">{t('publications.filter.fieldTitle')}</label>
				<input key={" "} type={"text"} value ={props.search || ""}
					   onChange={e => props.changeSearch(e.target.value === "" ? undefined: e.target.value)}
				/>
			</div>
			<div className="filter">
				<label className="publicationType" htmlFor="publication">{t('publications.filter.fieldTitle2')}</label>
				<select id="publication" name="publication" onChange={(e)=>props.changeType(e.target.value === "all" ? undefined: e.target.value)}>
					<option key={"all"} value={"all"}>{t('publications.filter.fieldOpt')}</option>
					<option key={"journal"} value={"article-journal"}>{t('publications.filter.fieldOpt2')}</option>
					<option key={"conference"} value={"paper-conference"}>{t('publications.filter.fieldOpt3')}</option>
				</select>
			</div>
			<div className="filter" id="filter_year">
				<label htmlFor="year">{t('publications.filter.fieldTitle3')}</label>
				<select id="year" name="year" onChange={(e)=>props.changeYear(e.target.value === "all" ? undefined: e.target.value)}>
					<option key={"all"} value={"all"}>{t('publications.filter.fieldOpt')}</option>
					{years.map(y=><option key={y} value={y}>{y}</option>)}
				</select>
			</div>
			{props.results === undefined ? null:<div className='research_results'><div> <p className='text-gray-400'> {t('publications.filter.text')}<b> {props.results} </b> </p></div></div>}
		</div>)
	
}