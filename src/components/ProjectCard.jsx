import { motion } from "framer-motion";


export default function ProjectCard({project}){


return (

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5
}}

className="
bg-white/10
backdrop-blur-xl
rounded-3xl
p-6
border
border-white/20
shadow-2xl
shadow-cyan-500/10
hover:border-cyan-400/50
transition-all
duration-300
">


<h3 className="
text-2xl
font-bold
text-cyan-400">

{project.title}

</h3>



<p className="
mt-4
text-gray-300">

{project.description}

</p>



<div className="
flex
flex-wrap
gap-2
mt-5
">


{
project.tech.map((item,index)=>(

<span

key={index}

className="
px-3
py-1
bg-purple-500/20
rounded-full
text-sm">

{item}

</span>

))

}


</div>



<a

href={project.github}

target="_blank"

className="
inline-block
mt-6
px-5
py-2
bg-cyan-500
text-black
rounded-lg">

GitHub

</a>


</motion.div>


)

}