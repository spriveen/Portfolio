import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-white text-black
                       py-4 px-8 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300
                       lg:py-3 lg:px-6 md:text-sm md:py-2 md:px-4 xs:py-1 xs:px-2 xs:text-xs'
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br overflow-hidden">
            <h2 className='font-bold text-8xl text-center text-black dark:text-white  mb-16 md:text-6xl md:mt-16'>
                Skills
            </h2>
            <motion.div 
                className='grid grid-cols-2 gap-8 p-10 bg-[#262626] rounded-lg shadow-2xl shadow-black
                            lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-[80vw] lg:w-[70vw] md:w-[60vw]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NextJs', 'Node JS', 'Web Design', 'Figma', 'Firebase', 'Tailwind CSS'].map(skill => (
                    <Skill key={skill} name={skill} />
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
