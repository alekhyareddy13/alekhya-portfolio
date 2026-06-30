import { motion } from "framer-motion";


const skills = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "CNN",
  "NLP",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "Flask",
  "Django",
  "React",
  "Frontend Technologies",
  "Git",
  "REST APIs",
  "MySQL"
];


export default function Skills(){

return (

<section
id="skills"
className="
py-24
bg-gradient-to-r
from-transparent
via-blue-950/20
to-transparent
text-white
">
<div className="
absolute
w-96
h-96
bg-purple-600
rounded-full
blur-[160px]
opacity-20
top-1/2
left-0
animate-pulse
">
</div>


<div className="
absolute
w-72
h-72
bg-cyan-400
rounded-full
blur-[130px]
opacity-15
bottom-10
right-10
">
</div>

<div className="
max-w-6xl
mx-auto
px-6
">


<motion.h2

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.5}}

className="
text-4xl
font-bold
text-cyan-400">

Skills

</motion.h2>



<div className="
flex
flex-wrap
gap-4
mt-10
">


{
skills.map((skill,index)=>(

<motion.span

key={index}

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
delay:index*0.03
}}

className="
px-5
py-3
rounded-xl
bg-white/10
border
border-white/10
hover:bg-cyan-500
hover:text-black
transition
">

{skill}

</motion.span>

))

}


</div>


</div>


</section>

)

}