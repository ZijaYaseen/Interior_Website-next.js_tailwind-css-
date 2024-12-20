import Image from "next/image"

const GalleryPage = () => {
  return (
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-5 lg:px-10'>
      <div className="flex flex-col gap-4">
        <div>
          <Image
          src={"/badroom.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery2.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
          src={"/swiper1.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery11.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/living.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
          src={"/gallery14.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery15.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery12.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

      </div>
      
      <div className="flex flex-col gap-4">
        <div>
          <Image
          src={"/gallery7.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery12.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

        <div>
          <Image
          src={"/gallery3.jpg"}
          height={400}
          width={300}
          alt="Gallery"
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          ></Image>
        </div>

      </div>
    </div>
  )
}

export default GalleryPage