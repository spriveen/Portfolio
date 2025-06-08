import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import project2 from '../../public/images/projects/1.jpg'
import project3 from '../../public/images/projects/3.jpg'
import project4 from '../../public/images/projects/2.jpg'
import project5 from '../../public/images/projects/4.jpg'
import project6 from '../../public/images/projects/6.jpg'
import project7 from '../../public/images/projects/5.jpg'
import project8 from '../../public/images/projects/2.jpg'
import project9 from '../../public/images/projects/7.jpg'
import project10 from '../../public/images/projects/8.jpg'
import project11 from '../../public/images/projects/9.jpg'
import project12 from '../../public/images/projects/10.jpg'
import project13 from '../../public/images/projects/11.jpg'
import project14 from '../../public/images/projects/12.jpg'
import project15 from '../../public/images/projects/13.jpg'
import project16 from '../../public/images/projects/14.jpg'
import project17 from '../../public/images/projects/15.jpg'
import project18 from '../../public/images/projects/16.jpg'
import project19 from '../../public/images/projects/17.jpg'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
          rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}}
        priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 50vw"/>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light
          p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit the Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
          rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}}/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className=' text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

const project = () => {
  return (
    <>
      <Head>
        <title>Riveen | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Creativity Outshines Knowledge!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-12 gap-28 gap-y-36 xl:gap-x-20 lg:gap-x-10 md:gap-y-28 sm:gap-x-4 '>
            <div className='col-span-12'>
              <FeaturedProject
                title="Gym Nest Application"
                img={project1}
                summary="Gym Nest is a dynamic, user-friendly website for fitness enthusiasts
                 designed using HTML, CSS, and JavaScript. It offers an engaging interface, helping users explore workouts,
                 fitness plans and gym facilities seamlessly"
                link="/"
                github="https://github.com/spriveen/GYM"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Cab Hub"
                img={project3}
                summary="Cab Hub is a modern, intuitive platform built with Next.js, TSX, and Tailwind CSS, connecting riders and drivers effortlessly. 
                It provides a sleek interface for seamless ride bookings and real-time tracking features"
                link="/"
                github="https://github.com/spriveen/car-booking"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Burger Shop"
                img={project2}
                summary="Burger Shop is a modern responsive website crafted with Next.js, Tailwind CSS, and TypeScript. It features an intuitive interface for browsing the menu
                 placing orders and discovering delicious options delivering a seamless user experience."
                link="/"
                github="https://github.com/spriveen/Burger-Landing"
                type="Featured Project"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Fashion Web Site"
                img={project8}
                summary="I created a stylish fashion website using HTML, CSS and JavaScript.
                 The site features an elegant design, allowing users to browse the latest trends
                 view collections and shop effortlessly for their favorite styles."
                link="/"
                github="https://github.com/spriveen/Fashion-Web-Site"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Online Courses Website"
                img={project5}
                summary="I developed an online course website using HTML, CSS, and JavaScript. 
                The platform provides an interactive learning experience
                 allowing users to browse coursesaccess resources and engage with
                  instructors seamlessly and effectively"
                link="/"
                github="https://github.com/spriveen/Online-Courses-Website-"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Online E-Channeling System"
                img={project6}
                summary="E-Channeling System is a sophisticated online platform developed using React.js, Node.js, and MongoDB. 
                This system offers a seamless and intuitive user experience for booking appointments. Users can easily search for healthcare providers, schedule consultations and manage their appointments efficiently. The responsive design ensures accessibility across devices
                  while secure data management enhances user privacy. This solution streamlines the healthcare process
                making it convenient for users to access medical services and connect with professionals effortlessly."
                link="/"
                github="https://github.com/spriveen/Doctor-Appointment"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Coffee Shop"
                img={project7}
                summary="Online Coffee Shop System is an innovative e-commerce platform developed using React.js. 
                This dynamic website provides a visually appealing and user-friendly interface allowing customers to effortlessly browse a diverse selection of coffee products, place orders and manage their accounts.
                 With features like secure payment processing and real-time inventory updates, the system ensures a seamless shopping experience. The responsive design optimizes usability across devices, making it easy for coffee lovers to indulge in their favorite brews anytime, anywhere. This system elevates the online coffee shopping 
                 experience connecting customers with premium coffee offerings"
                link="/"
                github="https://github.com/spriveen/Burger-Landing"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Digital News"
                img={project9}
                summary="Digital News Platform is a modern website built with Next.js, JSX, Tailwind CSS, Bootstrap and MongoDB. 
                It delivers real-time news updatesengaging articles and a responsive design, ensuring a 
                seamless user experience across devices"
                link="/"
                github="https://github.com/spriveen/-Digital-news-app"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Agency Website"
                img={project10}
                summary="Agency Website is a modern, responsive platform developed using Next.js, JSX, Tailwind CSS, Bootstrap
                 and MongoDB. This website is designed to showcase agency services with an engaging, user-friendly interface, optimized for seamless interaction across all devices. The project includes clean layouts, intuitive navigation, and real-time content updates, ensuring clients
                 have an exceptional browsing experience and easy access to all the information they need"
                link="/"
                github="https://github.com/spriveen/agency-web"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="CareerPulse"
                img={project11}
                summary="CareerPulse is a job vacancy search website that helps users find the latest job openings quickly and easily. It offers a user-friendly 
                interface to browse, filter, and apply for jobs across various industries."
                link="/"
                github="https://github.com/spriveen/Job-Posting"
                type="Featured Project"
              />
            </div>

             <div className='col-span-12'>
              <FeaturedProject
                title="The Coding Journey"
                img={project12}
                summary="The Coding Journey is a personal blog website that showcases my journey as a developer."
                link="/"
                github="https://github.com/spriveen/-E-learning-Education"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Liquar Shop"
                img={project13}
                summary="Liquor Shop is an online platform for browsing and purchasing a wide variety of alcoholic beverages, offering a seamless shopping experience with easy navigation and secure checkout."
                link="/"
                github="https://github.com/spriveen/Liquor-Shop"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="MotorBike Rental"
                img={project14}
                summary="MotorBike Rental is a responsive website built with HTML, CSS, and JavaScript that allows users to explore, book, and rent motorbikes easily. It features a clean design and smooth user experience."
                link="/"
                github="https://github.com/spriveen/Motor-Bike-Web-site"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Edusity"
                img={project15}
                summary="Edusity is a modern campus website built with React.js, Framer Motion, and Tailwind CSS. It offers a dynamic and interactive platform for students to explore academic resources, events, and campus updates."
                link="/"
                github="https://github.com/spriveen/Edustry"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Book Store"
                img={project16}
                summary="Book Store is a responsive website developed using HTML, CSS, and JavaScript, allowing users to browse, search, and purchase books online with a clean and user-friendly interface"
                link="/"
                github="https://github.com/spriveen/Book"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Ceylon Escapes"
                img={project17}
                summary="Ceylon Escapes is a hotel website built with HTML, CSS, and JavaScript, offering users a smooth experience to explore rooms, view amenities, and make bookings easily through a clean and responsive design."
                link="/"
                github="https://github.com/spriveen/Hotel-Booking-Website"
                type="Featured Project"
              />
            </div>
             
             <div className='col-span-12'>
              <FeaturedProject
                title="Deepseek"
                img={project18}
                summary="DeepSeeker Clone is a job search platform built with Next.js, Tailwind CSS, MongoDB, and REST API. It replicates core features of the original site, enabling users to search, filter, and view job listings in a fast and responsive UI"
                link="/"
                github="https://github.com/spriveen/DeepSeek-Clone"
                type="Featured Project"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title="Car Rental"
                img={project19}
                summary="Car Rental is a responsive website developed using HTML, CSS, and JavaScript, allowing users to browse available cars, view rental details, and make bookings with an intuitive and clean interface."
                link="/"
                github="https://github.com/spriveen/DeepSeek-Clone"
                type="Featured Project"
              />
            </div>

            

            {/* Add additional FeaturedProject components here if needed */}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default project
