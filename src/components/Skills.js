import React from 'react';
import { motion } from "framer-motion";

const Skill = ({ name }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-white text-black
                       py-3 px-6 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300
                       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:py-1 xs:px-2 xs:text-xs'
            whileHover={{ scale: 1.1, rotate: 10 }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br overflow-hidden">
            <h2 className='font-bold text-8xl text-center text-black mb-16 md:text-6xl md:mt-16'>Skills</h2>
            <div className='grid grid-cols-2 gap-8 p-8 bg-[#262626] rounded-lg shadow-2xl shadow-black
                            lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-[80vw] lg:w-[70vw] md:w-[60vw]'>
                <Skill name="HTML" />
                <Skill name="CSS" />
                <Skill name="JavaScript" />
                <Skill name="ReactJs" />
                <Skill name="NextJs" />
                <Skill name="Node JS" />
                <Skill name="Web Design" />
                <Skill name="Figma" />
                <Skill name="Firebase" />
                <Skill name="Tailwind CSS" />
            </div>
        </div>
    );
};

export default Skills;
