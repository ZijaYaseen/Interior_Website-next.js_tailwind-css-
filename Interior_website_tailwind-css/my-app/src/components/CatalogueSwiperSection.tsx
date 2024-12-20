"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import { Button } from "./ui/button"
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from 'next/image';
import { desVariants, tagVariants, titleVariants } from '../../utils/animation';

const CatalogueSwiperSection = () => {
  return (
    <div className='py-8 lg:py-28 px-5 md:px-10'>
        <div className='container grid pb-8 lg:grid-cols-1'>
            <div className='text-left'>
                <motion.h1
                initial ="offscreen"
                whileInView={'onscreen'} 
                variants={titleVariants}
                className='py-4 text-xl font-medium md:text-6xl lg:py-0'>Modern Classic
                </motion.h1>

                <motion.h2
                initial ="offscreen"
                whileInView={'onscreen'} 
                variants={desVariants}
                 className='pb-6 text-xl font-bold tracking-wider mt-5'>LUXURY DECOR TO CREATE COMFORT IN OUR HOME
                 </motion.h2>
            </div>

            <motion.div
            initial ="offscreen"
            whileInView={'onscreen'} 
            variants={tagVariants}
             className='grid grid-cols-2 text-gray-500 gap-x-8'>
           <p>
           With our deep passion for design and decor, we have curated not just one, but two stunning collections of furniture and accessories. Each collection is thoughtfully designed to help you craft a home that is not only comfortable but also brimming with unique style. Explore our range to discover the perfect blend of functionality and elegance tailored to elevate every corner of your space.
           </p>
           <p>
           Elevate your home with our exclusive range of furniture and accessories, crafted to blend timeless elegance with modern comfort. From cozy corners to statement-making centerpieces, our designs bring life and personality to every space. Explore a world where style meets functionality, and let your home reflect the beauty and warmth you have always dreamed of.
           </p>
            </motion.div>
            <a href="/gallery">
            <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
                View Gallery <TbArrowNarrowRight className="w-5 h-5 ml-2"/> </Button>
            </a>
        </div>
        
        {/* swiper section | horizontal loop of pics */}

        <Swiper 
        slidesPerView={1}
        breakpoints={
          {
            640: {
              slidesPerView: 2,
              spaceBetween : 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween : 50,
            },
          }
        }
        autoplay = {{delay:2500, disableOnInteraction:false}}
        modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image src={"/swiper1.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper2.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper3.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper4.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper5.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper6.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper7.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image src={"/swiper8.jpg"} 
            alt='Image'
            width={520}
            height={220}
            className='w-full' 
            />

          </SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default CatalogueSwiperSection