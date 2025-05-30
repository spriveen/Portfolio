import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Riveen Peanuka | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Driven by Passion, Guided by Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
              Life Story
              </h2>
              <p className="font-medium">
                Hi, I m Riveen Peanuka,  I’m a full-stack developer with 4 years of experience
                 skilled in Next.js, React.js, Tailwind CSS, TypeScript, JavaScript, Node.js, Prisma, PostgreSQL, 
                 MongoDB, and HTML/CSS. I’m passionate about building seamless and efficient digital solutions blending 
                 modern tech stacks with user-centered design to create engaging and functional web applications.
                 I look forward to bringing my skills and passion to your next project.
              </p>
              <p className="font-medium">
              I believe design goes beyond aesthetics it’s about solving problems and 
              crafting intuitive, enjoyable user experiences.
              </p>
              <p className="my-4 font-medium">
              Whether I’m working on a website, mobile app, or any digital product, I bring a strong commitment
              to design excellence and user-focused thinking to every project. I’m excited to apply my skills and
              passion to your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light" />
              <Image
                src={profilePic}
                alt="Riveen Peanuka"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={10}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>Complete Articles</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={31}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={4}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
                </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;



