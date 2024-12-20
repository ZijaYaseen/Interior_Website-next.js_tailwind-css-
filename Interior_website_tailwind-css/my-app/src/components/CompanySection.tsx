"use client";

import { desVariants, tagVariants, titleVariants } from "../../utils/animation"
import Badge from "./badge"
import {motion} from "framer-motion"

const CompanySection = () => {
  return (
    <div className='bg-primary dark:bg-tertiary-DEEFAULT py-24 sm:py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>

        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          {/* Badge 1 */}
          <motion.div
          initial = "offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='flex flex-col gap-y-4 mx-auto max-w-xs '>
            <dt className='text-white leading-7'>
              Transaction every 24 hours
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">
              <Badge 
              endCountNum={44}
              endCountText={' million'}/>
            </dd>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
          initial = "offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
           className='flex flex-col gap-y-4 mx-auto max-w-xs '>
            <dt className='text-white leading-7'>
              Assets Under Running
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">
              <Badge 
              endCountNum={119}
              endCountText={' trillion'}/>
            </dd>
          </motion.div>

          {/* Badge 3 */}
          <motion.div
          initial = "offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
           className='flex flex-col gap-y-4 mx-auto max-w-xs '>
            <dt className='text-white leading-7'>
              New Users Annually
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">
              <Badge 
              endCountNum={45000}
              endCountText={' +'}/>
            </dd>
          </motion.div>

        </dl>
      </div>
    </div>
  )
}

export default CompanySection