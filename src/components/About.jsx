import {motion} from "framer-motion";


export default function About(){


return(

<section
id="about"
className="
py-24
bg-gradient-to-r
from-purple-950/20
via-transparent
to-transparent
text-white
">

{/* Actual Content */}

<div className="
relative
z-10
max-w-5xl
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

About Me

</motion.h2>



<p className="
mt-8
text-gray-300
text-lg
leading-8">

I am a Software Engineer and AI enthusiast with experience in
Python development, machine learning, deep learning, and
automation systems. I enjoy building intelligent solutions that
combine research-driven AI approaches with scalable software
engineering practices.

</p>


</div>


</section>

)

}