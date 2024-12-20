"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { motion} from "framer-motion";
import { titleVariants , desVariants, tagVariants} from "../../../utils/animation";

const Aboutpage = () => {
  return (
    <div className="">
      <div className='bg-[url("/whoweare.jpg")] bg-center bg-cover'>
        <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Who are we?</h1>
      </div>

      <div className='pt-4 px-5 lg:px-10'>
        <motion.h2
        initial="offscreen"
        whileInView={"onscreen"} 
        variants={titleVariants}
        className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>
          We have great idea & Interior Design
        </motion.h2>

        <motion.p 
        initial="offscreen"
        whileInView={"onscreen"} 
        variants={desVariants}
        className='text-xl text-center font-semibold pb-10 mt-5 lg:mt-0 lg:px-14'>
          Our Interior design company is company that provides interior design service for homes, offices, apartments and others.
        We provide the best interior design service for you. We have a team that is experienced in the field of interior.
        </motion.p>
      </div>

      <div className="items-center lg:flex gap-x-8 px-5 lg:px-10">

        {/* left section */}
      <div className="w-full items-center">
        <Image
        src={'/gallery1123.jpg'} 
        alt="image"
        width={800}
        height={800}
        ></Image>
      </div>

      {/* right section */}
      <div>
        <motion.p 
        initial="offscreen"
        whileInView={"onscreen"} 
        variants={tagVariants}
        
        className='pb-8 tracking-wide mt-6 lg:mt-0'>
          We are an international architects. We believe that today it is fundamental to totally rethink archi-tectural education.
          Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to 
          creativity, production and communication. Designed and handcrafted to hold and showcase my yaer two architecture portfolio,
          the unfolding box allows portfolio sheets. <br /> <br />
          In the ever-evolving landscape of architecture, education must transcend traditional frameworks to embrace a multidisciplinary 
          approach. By blending technological advancements with artistic exploration, we can cultivate a generation of architects equipped 
          to address the complexities of modern society. Programs that encourage collaboration, critical thinking, and innovation create 
          a fertile ground for ideas to flourish. <br /> <br />
          <span className='text-xl font-extrabold traking-tight'>
            The backpiperARCH, we share a belief in the transformational power of people uunited in a common purpose.
          </span>

        </motion.p>

        <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
          Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      </div>

{/* Team section */}
      <div className="lg:py-20">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold tracking-wider text-center uppercase">Team</h1>
        </div>

        <div className="grid py-8 grid-cols-3 gap-16 px-5 lg:px-10">
          {/* 1st team member */}
          <div className="border-2 border-primary">
            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary-DEEFAULT -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
              <Image src={"/profile2.jpg"}
              width={200}
              height={200}
              alt="team"
              className="mx-auto rounded-full"
              ></Image>
              <h2 className="py-4 text-2xl font-semibold uppercase">
                Building surveys</h2>
              <p className="text-sm">
                Creativity is the ability to generate, create or discover new ideas, solutions and possibilities.
              </p>
            </div>
          </div>

          {/* 2nd team member */}
          <div className="border-2 border-primary">
            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary-DEEFAULT -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
              <Image src={"/profile1.jpg"}
              width={200}
              height={200}
              alt="team"
              className="mx-auto rounded-full"
              ></Image>
              <h2 className="py-4 text-2xl font-semibold uppercase">
                Building surveys</h2>
              <p className="text-sm">
                Creativity is the ability to generate, create or discover new ideas, solutions and possibilities.
              </p>
            </div>
          </div>
         
         {/* 3rd team member */}
         <div className="border-2 border-primary">
            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary-DEEFAULT -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
              <Image src={"/profile3.jpg"}
              width={200}
              height={200}
              alt="team"
              className="mx-auto rounded-full"
              ></Image>
              <h2 className="py-4 text-2xl font-semibold uppercase">
                Building surveys</h2>
              <p className="text-sm">
                Creativity is the ability to generate, create or discover new ideas, solutions and possibilities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Aboutpage