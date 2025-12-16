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
import project20 from '../../public/images/projects/18.jpg'
import project21 from '../../public/images/projects/19.jpg'
import project22 from '../../public/images/projects/20.jpg'
import project23 from '../../public/images/projects/21.jpg'
import project24 from '../../public/images/projects/22.jpg'
import project25 from '../../public/images/projects/23.jpg'
import project26 from '../../public/images/projects/24.jpg'
import project27 from '../../public/images/projects/25.jpg'
import project28 from '../../public/images/projects/26.jpg'
import project29 from '../../public/images/projects/27.jpg'
import project30 from '../../public/images/projects/28.jpg'
import project31 from '../../public/images/projects/29.jpg'
import project32 from '../../public/images/projects/30.jpg'






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
                github="https://github.com/spriveen/Car-Rental-Website"
                type="Featured Project"
              />
            </div>

             <div className='col-span-12'>
              <FeaturedProject
                title="Blogger"
                img={project20}
                summary="Blogger is a responsive website built with HTML, CSS, and JavaScript, focused on travel, food and nature. It features engaging blog posts, beautiful layouts, and an easy-to-navigate interface for readers to explore diverse content."
                link="/"
                github="https://github.com/spriveen/-Blooger-Website"
                type="Featured Project"
              />
            </div>

             <div className='col-span-12'>
              <FeaturedProject
                title="E-Shop"
                img={project21}
                summary="E-Shop is a modern e-commerce website built with React.js and Tailwind CSS. It showcases products like handfrees, laptops, and VR boxes, offering a smooth shopping experience with responsive design and user-friendly navigation"
                link="/"
                github="https://github.com/spriveen/Eshop"
                type="Featured Project"
              />
            </div>

             <div className='col-span-12'>
              <FeaturedProject
                title="Fruit Store"
                img={project22}
                summary="Fruit Store is a fresh and vibrant online shop built with React.js, Tailwind CSS, and Framer Motion. It offers a smooth, animated user experience for browsing and buying fresh fruits with an attractive, responsive design."
                link="/"
                github="https://github.com/spriveen/Fruit-Selling"
                type="Featured Project"
              />
              </div>

              <div className='col-span-12'>
              <FeaturedProject
                title="Expense Tracker"
                img={project23}
                summary="Developed an Expense Tracker application using React.js to manage and visualize personal spending efficiently."
                link="/"
                github="https://github.com/spriveen/Expense-Tracker"
                type="Featured Project"
              />
              </div>
            
            
              <div className='col-span-12'>
              <FeaturedProject
                title="RideFlex"
                img={project24}
                summary="Built a fully responsive Car Rental Website using React JS with features like car booking, Login & Register pages, and smooth UI/UX design. Deployed the project on Netlify for a production-ready experience."
                link="/"
                github="https://github.com/spriveen/RideFlex"
                type="Featured Project"
              />
              </div>
                 
                 
               <div className='col-span-12'>
              <FeaturedProject
                title="Igloo"
                img={project25}
                summary="Designed a visually appealing Ice Cream website with smooth animations using HTML, CSS, and JavaScript. Focused on creating an engaging UI/UX experience to showcase products creatively."
                link="/"
                github="https://github.com/spriveen/Ice-Cream"
                type="Featured Project"
              />
              </div>

               <div className='col-span-12'>
              <FeaturedProject
                title="Sales Management Dashboard"
                img={project26}
                summary="Developed a project using Chart.js to render dynamic graphs by providing custom input values. Implemented responsive design using CSS Flexbox, Grid, CSS Variables, and Media Queries with a mobile-first approach. Added CSS transitions for smooth, visually appealing effects."
                link="/"
                github="https://github.com/spriveen/Sales-Managment-Dashboard"
                type="Featured Project"
              />
              </div>

               <div className='col-span-12'>
              <FeaturedProject
                title="Skywings"
                img={project27}
                summary="Built a SkyWings airline website using HTML, CSS, and JavaScript. Focused on creating a clean, responsive layout with smooth interactions and an engaging UI/UX design for users."
                link="/"
                github="https://github.com/spriveen/Skywings"
                type="Featured Project"
              />
              </div>

              <div className='col-span-12'>
              <FeaturedProject
                title="Pizza Shop"
                img={project28}
                summary="Developed a Pizza Shop website using Next.js and Tailwind CSS, featuring a modern, responsive design with smooth user interactions. Focused on UI/UX design to provide an engaging experience for customers."
                link="/"
                github="https://github.com/spriveen/pizza-shop"
                type="Featured Project"
              />
              </div>

              <div className='col-span-12'>
              <FeaturedProject
                title="Full-stack Car Rental"
                img={project29}
                summary="Full-stack Car Rental Website built with the MERN stack, featuring JWT authentication, car listings, booking management, and an admin dashboard. Includes ImageKit media optimization and a scalable, production-ready architecture"
                link="/"
                github="https://github.com/spriveen/-Full-Stack-Car-Rental-Booking-App-"
                type="Featured Project"
              />
              </div>


              <div className='col-span-12'>
              <FeaturedProject
                title="Live Cricket Score App"
                img={project30}
                summary="A real-time cricket score tracker built with React.js and Rapid API, featuring live match updates, player stats, and schedules in a clean, responsive Tailwind CSS UI. This project strengthened my skills in API integration and React state management.A real-time cricket score tracker built with React.js and Rapid API, featuring live match updates, player stats, and schedules in a clean, responsive Tailwind CSS UI. This project strengthened my skills in API integration and React state management."
                link="/"
                github= "https://github.com/spriveen/Live-Cricket-Score-App"
                type="Featured Project"
              />
              </div>

              
              <div className='col-span-12'>
              <FeaturedProject
                title="AI-Powered Resume Analyzer"
                img={project31}
                summary="A smart resume screening web app built with React, React Router, and Puter.js that uses AI to match candidate resumes with job requirements. Features include resume uploads, job management, and a clean, modern UI for efficient hiring workflows."
                link="/"
                github= "https://github.com/spriveen/AI-powered-Resume-Analyzer"
                type="Featured Project"
              />
              </div>

              <div className='col-span-12'>
              <FeaturedProject
                title="Clothify"
                img={project32}
                summary="A modern, fully responsive ecommerce website built using ReactJS and Tailwind CSS, covering complete UI development and deployment. This project demonstrates building, styling, and deploying a real-world ecommerce application."
                link="/"
                github= "https://github.com/spriveen/Clothify"
                type="Featured Project"
              />
              </div>

               <div className='col-span-12'>
              <FeaturedProject
                title="Learning Management System"
                img={project33}
                summary="A complete LMS website built using React JS, where educators can upload courses and students can enroll and watch lessons online. The platform uses Clerk for secure authentication, featuring ready-to-use Sign-In, Sign-Up, and profile UI components."
                link="/"
                github= "https://github.com/spriveen/LMS"
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
