import React, {useRef} from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'


const Details=({position, company, companyLink, time, address, work}) =>{

  const ref =useRef(null)
    return(
        <li ref={ref} className='my-3 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className='my-64 md:my-[50px] xs:my-[60px]'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
        Experience
        </h2>

      <div ref = {ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            position="Software Engineer" company="Donext"
            companyLink="https://www.linkedin.com/company/donexttechnologies/posts/?feedView=all"
            time="2024-01 Present" address="Ambalangoda, Southern Province, Sri Lanka"
            work="I built an LMS project that simplifies learning management by offering user-friendly 
            features like course tracking, assessments, and progress reports. It's designed to enhance the
             learning experience for students and streamline administration for educators."/>

            <Details
            position="Software Engineer" company="Donext"
            companyLink="https://www.linkedin.com/company/donexttechnologies/posts/?feedView=all"
            time="2024-04 Present" address="Ambalangoda, Southern Province, Sri Lanka"
            work="LK Model Zone is a uniquely designed website showcasing models with a modern and sleek interface.
             It highlights portfolios, photoshoots and profiles,offering an engaging platform for models and agencies 
             to connect seamlessly."/>


            <Details
            position="Software Engineer" company="Donext"
            companyLink="https://www.linkedin.com/company/donexttechnologies/posts/?feedView=all"
              time="2024-06 Present" address="Ambalangoda, Southern Province, Sri Lanka"
            work="Potimate is a driving tracking system that offers real-time vehicle monitoring, route optimization 
            and driver performance insights. It's designed to enhance safety, improve efficiency, and provide
            detailed reports for fleet management."/>


            <Details
            position="Software Engineer" company="Donext"
            companyLink="https://www.linkedin.com/company/donexttechnologies/posts/?feedView=all"
             time="2024-08 Present" address="Ambalangoda, Southern Province, Sri Lanka"
            work="Sonnenheu is a farm website that connects consumers with fresh, organic produce. It offers an easy
            to-navigate platform for purchasing farm goods, promoting sustainable farming, and supporting
            local agriculture through direct sales."/>


            {/* <Details
            position="Software Engineer" company="Donext"
            companyLink="http://www.google.com"
            time="2024-Present" address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."/> */}

            
            {/* <Details
            position="Software Engineer" company="Google"
            companyLink="http://www.google.com"
            time="2022-Present" address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."/> */}
        </ul>
      </div>
    </div>
  )
}

export default Experience
