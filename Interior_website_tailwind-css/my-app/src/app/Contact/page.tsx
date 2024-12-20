"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { useState } from "react";

function classNames(...classes:any){
  return classes.filter(Boolean).join(' ')
}

export default function ContactPage (){

  const [agreed, setAgreed] = useState(false)

  return (

    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact sales
        </h2>

        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything
        </p>
      </div>

      {/* Contact form */}
      <form method="POST"
      className="mt-16 mx-auto max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div className="mt-2.5">
            <Input
            type="name"
            id="first name"
            placeholder="First name"
             />
          </div>

          <div className="mt-2.5">
            <Input
            type="name"
            id="last name"
            placeholder="Last name"
             />
          </div>

          <div className="sm:col-span-2">
          <div className="mt-2.5">
            <Input
            type="email"
            id="company"
            placeholder="Company"
             />
          </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
                <Textarea placeholder="Type Your message here..." />
            </div>
          </div>

          <Switch.Group as="div" className='flex items-start gap-3'>
       
       <div className="">
       <Switch
          checked={agreed}
          onChange={setAgreed}
          className={`${
            agreed ? "bg-primary" : "bg-gray-200"
          } flex w-8 mt-1 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
        >
          <span className="sr-only">Agree to policies</span>
          <span
            aria-hidden="true"
            className={`${
              agreed ? "translate-x-3.5" : "translate-x-0"
            } h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
          />
        </Switch>
       </div>

       <Switch.Label className='text-sm leading-6 text-gray-600'>
        By selecting this, you agree to our {' '}
        <a href="#" className="font-semibold text-primary">
          privacy&nbsp;policy
        </a> .
       </Switch.Label>
        
      </Switch.Group>

        </div>

       <div className="mt-10">
         <Button type="submit" className="flex w-full items-center px-8 py-3 lg:py-8 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
          Let&#39;s talk <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Button>

       </div>
      </form>
    </div>
  )
}