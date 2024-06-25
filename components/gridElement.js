"use client";

import react from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from 'react-i18next';
export default function GridElement(props) {
  const { t } = useTranslation();
  return (
<div className="grid_container">      <div className="grid_item top_left width-1 ">
        <h5>{t('front.gridElements.topL')}</h5>
        <small className="small_sub"></small>
      </div>
      <div className="grid_item top_mid width-3">
        <h5>{t('front.gridElements.topM')}</h5>
        <small className="small_sub">{t('front.gridElements.topMsub')}</small>
      </div>
      <div className="grid_item top_right width-2">
        <h5>{t('front.gridElements.topR')}</h5>
        <small className="small_sub"></small>
      </div>
      <div className="grid_item bottom_left width-2">
        <h5>{t('front.gridElements.bottomL')}</h5>
        <small className="small_sub"></small>
      </div>
      <div className="grid_item bottom_mid width-1">
        <h5>{t('front.gridElements.bottomM')}</h5>
        <small className="small_sub">{t('front.gridElements.bottomMsub')}</small>
      </div>
      <div className="grid_item bottom_right width-3">
        <h5>{t('front.gridElements.bottomR')} </h5>
        <small className="small_sub"></small>
      </div></div>

  
  );

}
