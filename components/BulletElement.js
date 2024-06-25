"use client";

import React,{useEffect, useRef} from "react";
import { useTranslation } from 'react-i18next';
import { myBulletElements } from "@/constants/BulletElement";
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BulletElements(props) {
    const { t } = useTranslation();
    const controls = useAnimation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
   

   
    const bulletElements = myBulletElements.map(({ translationKey, letter, key }) => ({
        title: t(translationKey),
        letter,
        key,
    }));

    const containerVariants = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 50, damping: 20 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 1 } }
    };
  
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest > 0.1) {
                controls.start('visible');
            } else {
                controls.start('hidden');
            }
        });

        return () => unsubscribe();
    }, [controls, scrollYProgress]);
    return (
        // <div className="bullet_elements">
        //     {bulletElements.map(({ title, letter, key }) => (
        //         <div key={key} className="bullet_element">
        //             <h5 className="title pl-8">{title}</h5>
        //             <h1 className="letter pr-8">{letter}</h1>
        //         </div>
        //     ))}
        // </div>
        <motion.div
            className="bullet_elements"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {bulletElements.map(({ title, letter, key }) => (
                <motion.div key={key} className="bullet_element" variants={textVariants}>
                    <h5 className="title pl-8">{title}</h5>
                    <h1 className="letter pr-8">{letter}</h1>
                </motion.div>
            ))}
        </motion.div>
    );
}
