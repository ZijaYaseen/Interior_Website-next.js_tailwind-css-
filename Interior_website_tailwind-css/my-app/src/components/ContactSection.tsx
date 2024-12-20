"use client";

import Image from "next/image"
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "../../utils/animation";

const ContactSection = () => {

    const post = [
        {
            id: 1,
            title :"Boost your conversion rate",
            href : "#",
            description :"It is a fantastic theme with tons of designs and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
            date:"Dec-21-2024",
            datetime :"2024-12-21",
            category : {title: "4.7", href :"#"},
            author : {
                name :"Natasha",
                role :"Co-Founder / CTO",
                href :"#",
                imageURL:"/profile1.jpg"
            }
        },
        {
            id: 2,
            title :"Boost your conversion rate",
            href : "#",
            description :"It is a fantastic theme with tons of designs and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
            date:"Dec-21-2024",
            datetime :"2024-12-21",
            category : {title: "4.9", href :"#"},
            author : {
                name :"Michael Chris",
                role :"Co-Founder / CeO",
                href :"#",
                imageURL:"/profile2.jpg"
            }
        },
        {
            id: 3,
            title :"Boost your conversion rate",
            href : "#",
            description :"It is a fantastic theme with tons of designs and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
            date:"Dec-21-2024",
            datetime :"2024-12-21",
            category : {title: "4.2", href :"#"},
            author : {
                name :"Sameul JOS",
                role :"Co-Founder / CTO",
                href :"#",
                imageURL:"/profile3.jpg"
            }
        },
    ]

  return (
    <div className='px-5 md:px-10 lg:pt-12 pt-5'>
        <div className='mx-auto max-w-7xl'>
            <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants} 
            className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Customer Reviews
            </motion.h2>

            <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants} 
            className='mt-2 text-lg leading-8 text-muted-foreground'>
                Learn how to grow your business with our expert advice.
            </motion.p>

            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mx-auto mt-8 lg:grid-cols-3 grid grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                {post.map((item) => (
                 <article key={item.id}
                 className="flex max-w-7xl flex-col items-start justify-between"
                 >

                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={item.datetime}>
                        <Image
                        src={"/star.svg"}
                        width={80}
                        height={5}
                        alt="star"
                        ></Image>
                        </time>

                        <a className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                         href={item.category.href}>
                            
                            {item.category.title}
                        </a>
                    </div>

                    <div className="group relative ">

                        <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                            <a href={item.href}>
                                <span>{item.title} </span>
                            </a>
                        </h3>

                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                            {item.description}
                        </p>

                    </div>

                    <div className="relative mt-8 flex items-center gap-x-4">
                        <Image
                        src={item.author.imageURL}
                        alt="Author"
                        width={100}
                        height={100} 
                        className="h-10 w-10 rounded-full bg-gray-500"
                        ></Image>

                        <div className="text-sm leading-6">
                            <p className="font-semibold">
                                <a href={item.author.href}>
                                    <span />
                                    {item.author.name}
                                </a>
                            </p>
                            <p className="text-muted-foreground">
                                {item.author.role}
                            </p>
                        </div>
                    </div>

                 </article>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default ContactSection