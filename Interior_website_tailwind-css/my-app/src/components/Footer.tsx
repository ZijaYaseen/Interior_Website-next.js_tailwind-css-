import Link from "next/link"
import { Input } from "./ui/input"

export default function Footer () {
  return(
    <div className="bg-tertiary-DEEFAULT">
      <div className="container lg:grid lg:grid-cols-2 py-14 px-5 lg:px-10">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
            <Link href={"/"} className="py-1 hover:underline">About Us</Link>
            <Link href={"/"} className="py-1 hover:underline">Press</Link>
            <Link href={"/"} className="py-1 hover:underline">Careers</Link>
            <Link href={"/"} className="py-1 hover:underline">Contact</Link>
            </div>
          </div>

          <div>
          <h2 className="pb-4 text-xl font-semibold uppercase">Development</h2>
            <div className="flex flex-col">
            <Link href={"/"} className="py-1 hover:underline">Documentation</Link>
            <Link href={"/"} className="py-1 hover:underline">Reference</Link>
            <Link href={"/"} className="py-1 hover:underline">Changelog</Link>
            <Link href={"/"} className="py-1 hover:underline">Status</Link>
            </div>
          </div>

          <div>
          <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
            <Link href={"/"} className="py-1 hover:underline">Instagram</Link>
            <Link href={"/"} className="py-1 hover:underline">Twitter</Link>
            <Link href={"/"} className="py-1 hover:underline">LinkedIn</Link>
            <Link href={"/"} className="py-1 hover:underline">Facebook</Link>
            </div>
          </div>

        </div>
        <div>
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
               <Input type="name" id="firstName" placeholder="Email Address" />
               <button className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
                Subscribe
               </button>
          </div>
          <p className="pt-4 text-gray-500">By subscribing to our newsletter , you agree to receive emails from us. Your Personal data will be stored and
            pocessed in accordance with our Privacy Policy and you can unsubscribe at any time.
          </p>
        </div>
      </div>
      {/* CopyRight */}

      <div className="py-10 bg-black dark:bg-primary">
        <div className="container text-white text-center lg:justify-between lg:flex ">
          <div className="pb-4 lg:pb-0 lg:pl-5">
            <p>&copy; 2024 Interior. All Rights Reserved</p>
          </div>
          <div>
            <Link href={"/"} className="p-4 hover:underline">Privacy</Link>
            <Link href={"/"} className="p-4 hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  )
}