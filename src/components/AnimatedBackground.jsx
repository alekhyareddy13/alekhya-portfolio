import { motion } from "framer-motion";


export default function AnimatedBackground(){

return(

<div
className="
fixed
inset-0
-z-10
overflow-hidden
bg-[#050816]
">


{/* Cyan Orb */}

<motion.div

className="
absolute
w-[500px]
h-[500px]
rounded-full
bg-cyan-500/20
blur-[120px]
"

animate={{

x:[-100,200,-100],

y:[0,200,0]

}}

transition={{

duration:15,

repeat:Infinity,

ease:"easeInOut"

}}

/>




{/* Purple Orb */}

<motion.div

className="
absolute
w-[450px]
h-[450px]
rounded-full
bg-purple-600/20
blur-[120px]
right-0
"

animate={{

x:[100,-200,100],

y:[100,-100,100]

}}

transition={{

duration:18,

repeat:Infinity,

ease:"easeInOut"

}}

/>




{/* Pink Orb */}

<motion.div

className="
absolute
w-[350px]
h-[350px]
rounded-full
bg-pink-500/20
blur-[110px]
bottom-0
left-1/3
"


animate={{

scale:[1,1.3,1],

opacity:[0.5,0.8,0.5]

}}

transition={{

duration:8,

repeat:Infinity,

ease:"easeInOut"

}}

/>




{/* Green Orb */}

<motion.div

className="
absolute
w-[300px]
h-[300px]
rounded-full
bg-emerald-500/20
blur-[100px]
right-1/4
top-1/3
"


animate={{

rotate:[0,180,360],

x:[0,50,0]

}}

transition={{

duration:20,

repeat:Infinity,

ease:"linear"

}}

/>



</div>

)

}