"use client";
import {motion} from "framer-motion"

import Image from "next/image"
import { desVariants, tagVariants, titleVariants } from "../../utils/animation";

const AboutComponent = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto] md:px-4'>
        <div className='grid lg:grid-cols-2 place-items-center'> 
            <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            >
                <Image 
                src={"/aboutfront.png"}
                width={900}
                height={500}
                alt="About"
                className="max-md:hidden"
                />
            </motion.div>

            <div className="items-center">
                <motion.h2
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                 className="px-12 py-4 text-3xl font-semibold leading-tight lg:text-5xl">
                    We are awards Winning Comapany
                    </motion.h2>

                <motion.p
                 initial="offscreen"
                 whileInView={"onscreen"}
                 variants={desVariants}
                 className="px-12 tracking-wider uppercase text-gray-400 mt-3">World Award
                 </motion.p>

                <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                 className="px-12 pb-4 mt-4">
                  This is a company in the field of interior designs. We provide the best 
                  interior designs for your home. We have been trusted by many people to design their home.
                  We also have received many awards from various countries for our work.
                  </motion.p>

                <motion.p 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="px-12 pb-4">
                We specialize in crafting innovative and elegant interior designs that bring life to your spaces. 
                Our team ensures every detail is tailored to match your style and preferences. From modern minimalism 
                to timeless classics, we transform your vision into reality, creating homes that inspire comfort and 
                beauty.
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent