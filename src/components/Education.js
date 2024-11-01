import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-center"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  
  return (
    <div className="my-64 md:my-[50px] xs:my-[60px]">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Science in Computer Science"
            time="Nov 2020 - Dec 2023"
            place="NSBM Green University"
            info="Specialized in Software Engineering."
          />
          <Details
            type="B.Sc (Hons) Software Engineering"
            time="Expected Graduation: 2024"
            place="University of Plymouth"
            info="Focused on Computer Software Engineering."
          />
          <Details
            type="Certificate Program in Coding Fundamentals"
            time="2020-2021"
            place="NSBM Green University"
            info="Introduction to Programming , Data Structures and Algorithms , Object Oriented Programming."
          />

          <Details
            type="G.C.E. Advanced Level"
            time="2006-2020"
            place="Sri Devananda College, Ambalangoda"
            info="Subjects: Biology, Chemistry, Physics."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
