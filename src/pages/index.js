import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/lightbulb.svg";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";

export default function Home() {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={profilePic}
              alt="Riveen Peanuka"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Hello! 👋🏻 I'm Riveen Peanuka"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a proficient full-stack developer, I am dedicated to turning innovative concepts into cutting-edge
              web applications. I specialize in React.js, Next.js, Tailwind CSS, TypeScript, JavaScript, Node.js, and
              databases such as MongoDB and PostgreSQL. Explore my recent projects and articles that showcase
              my expertise in modern web development, emphasizing responsive design, efficient coding practices, and seamless user experiences.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/dummy.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base"
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href="mailto:rpeanuka@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
              <button
                onClick={() => setIsPhoneVisible(!isPhoneVisible)}
                className="ml-4 flex items-center text-lg font-medium capitalize text-dark  dark:text-light md:text-base"
              >
                <FiPhone className="mr-2" /> {isPhoneVisible ? "+94 71 583 1427" : "Show Number"}
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image src={lightBulb} alt="Riven Peanuka" />
      </div>
    </main>
  );
}
