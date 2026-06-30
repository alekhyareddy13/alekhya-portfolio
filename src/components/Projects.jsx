import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";


export default function Projects(){


return(

<section

id="projects"

className="
py-24
bg-gradient-to-r
from-cyan-950/20
via-transparent
to-purple-950/20
text-white">


<div className="
max-w-6xl
mx-auto
px-6">


<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-4xl
font-bold
text-cyan-400">


Projects


</motion.h2>



<p className="
mt-5
text-gray-300
max-w-2xl">


A collection of AI, Machine Learning, and Software Engineering
projects demonstrating my experience in building practical solutions.


</p>



<div className="
grid
md:grid-cols-2
gap-8
mt-12">


{
projects.map((project,index)=>(

<ProjectCard

key={index}

project={project}

/>

))
}


</div>


</div>


</section>

)

}