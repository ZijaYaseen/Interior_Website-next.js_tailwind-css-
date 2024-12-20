import Image from "next/image"

const projects = [
  {
    id: 1,
    name:"Drowing room for family time",
    description:"Drowing room with a clean and comfortable design for your family. Charming with a modern design",
    image:"/project3.jpg",
    link:"/",
  },
  {
    id: 2,
    name:"Kitchen look modern and clean",
    description:"Kitchen look modern and clean Charming with a modern design",
    image:"/project2.jpg",
    link:"/",
  },
  {
    id: 3,
    name:"Perfect living room for family time",
    description:"Living room with a clean and comfortable design for your family. Charming with a modern design",
    image:"/project4.png",
    link:"/",
  },

]

const ProjectsPage = () => {
  return (
    <div>
      <div className="bg-[url('/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="py-64 container text-6xl font-semibold tracking-widest text-white lg:px-20 px-10">
          Our Projects
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8 mx-auto">
        {projects.map((project)=> (
          <div key={project.id} 
          className="relative overflow-hidden rounded-xl group">
            <div>
              <Image
              src={project.image}
              width={480}
              height={380}
              alt="project"
              className="w-full"
              ></Image>
            </div>

            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/50 flex flex-col items-center justify-end w-96 p-12 text-xl transition duration-300 ease-in-out
            translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">
                {project.name}
                </h1>
              <p className="py-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage