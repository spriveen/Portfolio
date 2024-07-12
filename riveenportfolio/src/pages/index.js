import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png"

export default function Home() {
  return (
   <main className='flex items-center text-dark w-full min-h-screen' >
    <Layout className='pt-0'>
     <div className="flex.item-center.justify-between w-full">
         <div className='w-1/2'>
          <Image src={profilePic} alt="Riveen Peanuka" className='w-full  h-auto'/>
         </div>
         <div className="w-1/2">
          <h1>Turning Vision Reality With Code And Design</h1>
          <p>
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
          Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>
         </div>
      </div>
    </Layout>
    </main>
     
  )
}
