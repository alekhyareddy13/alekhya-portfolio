import { motion } from "framer-motion";


export default function Hero(){


return(

<section

className="
min-h-screen
flex
items-center
justify-center
bg-transparent
text-white
relative
overflow-hidden
">


<div className="
absolute
w-96
h-96
bg-cyan-500
rounded-full
blur-[150px]
opacity-20
top-20
left-20
animate-pulse
">
</div>


<div className="
absolute
w-96
h-96
bg-purple-500
rounded-full
blur-[150px]
opacity-20
bottom-20
right-20
animate-pulse
">
</div>



<div className="
relative
z-10
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-2
gap-10
items-center
">


<div>

<motion.h1

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="
text-5xl
font-bold
">

Hi, I'm{" "}

<span className="
text-cyan-400">

Alekhya Reddy

</span>

</motion.h1>

<motion.h2

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:0.4}}

className="
text-2xl
mt-5
text-gray-300">

AI Engineer | Python Developer | Machine Learning Enthusiast

</motion.h2>




<p className="
mt-6
text-gray-300
leading-8">

Software Engineer with experience in Python development,
machine learning, deep learning, and intelligent automation
systems. Passionate about building scalable solutions
that solve real-world problems.

</p>



<div className="
mt-6
space-y-2
text-gray-300
">


<p>
📧 reddy.alekhyaj@gmail.com
</p>


<p>
📞 +91 7995879544
</p>


</div>



<div className="
mt-8
flex
gap-4
flex-wrap
">


<a

href="/resume.pdf"

download

className="
px-6
py-3
bg-cyan-500
text-black
rounded-xl
font-semibold">

Download Resume

</a>



<a

href="https://github.com/alekhyareddy13"

target="_blank"

className="
px-6
py-3
border
border-cyan-400
rounded-xl">

GitHub

</a>


<a

href="https://linkedin.com/in/jeeri-alekhya-reddy-b2b43a267"

target="_blank"

className="
px-6
py-3
border
border-purple-400
rounded-xl">

LinkedIn

</a>


</div>



</div>



<motion.div

initial={{opacity:0,scale:0.8}}

animate={{opacity:1,scale:1}}

transition={{duration:0.8}}

className="
flex
justify-center
">


<img

src="/profile.png"

alt="Alekhya Reddy"

className="
w-72
h-72
rounded-full
object-cover
border-4
border-cyan-400
"

/>


</motion.div>



</div>


</section>


)

}