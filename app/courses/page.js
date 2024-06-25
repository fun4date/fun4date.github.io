"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
// aquí habría que importar los cursos
import { mycourses } from "@/constants/courses.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Courses() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [courses, setCourses] = useState(mycourses);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"courses page_"+ currentLang}>
      <Header route={"/courses"} />
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <h1>{t('courses.title')}</h1>
      </div>
      <main>
        <section className="lg:mx-36 md:mx-14 sm:mx-8 mx-4 my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60">
          <div className="courses_description text-slate-700 pb-8">
            <p>{t('courses.desc')}</p>
          </div>
          <div className=" grid gap-4 md:grid-cols-2 sm:grid-cols-1">
            {courses.map(({ date, gradient, edition, title, description, route }) => {
              return (
                <div
                  key={title}
                  className={`rounded-lg px-6 py-4 course  ${gradient}`}
                >
                  <div className="course_main transition">
                    <div className="course_content">
                      <div className="card_container_top">
                        <div className="flex gap-3">
                        <span className="course_tag">
                          <small>{date}</small>
                        </span>
                        <span className="course_tag">
                          <small> {edition}{t('courses.tag')}</small>
                        </span>
                        </div>
                        <button className="course_route">
                        <CreateLink route={route}>
                        <FontAwesomeIcon className="award_icon" icon={faArrowRight} />
                          <span>{t('courses.button')}</span>
                        </CreateLink>
                        </button>
                      </div>
                      <div className="course_text_block">
                        <div className="course_title">
                          <h4>{title}</h4>
                        </div>
                        <div className="course_description">
                          <small> {description}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
