"use client";
import { Button } from "./ui/button"
import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import {desVariants, tagVariants, titleVariants} from "../../utils/animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className='mx-[auto] container py-12 xl:py-3 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
        {/* left section */}
        <div className='lg:w-1/2 xl:py-14 lg:py-4'>
            <motion.p
            initial = "offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='tracking-widest uppercase'>Offer for the best interior
            </motion.p>

            <motion.h1 className='h1'
            initial = "offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            >
            Make your house a <br />piece of art
        </motion.h1>

        <motion.p
        initial = "offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        className='pb-6 text-muted-foreground xl:pb-10 px-2 md:px-0'>Change your view with the best interior design. We provide the finest interior design solutions to transform your home into a sanctuary of style.
        Make every moment beautiful with exceptional interior design. Let us redefine your spaces with elegance and functionality, creating a home you’ll love every day.
        </motion.p>

        <motion.div
          initial = "offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          >
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
          Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Button>
        </motion.div>

        </div>
        {/* right section */}
        <div className='w-1/2'>
        <Image
        src={"/hall.png"}
        alt=""
        width={600}
        height={600}
        className="absolute right-10  hidden lg:block xl:py-14 lg:py-4"/>
        </div>
    </div>
  )
}

export default HeroSection