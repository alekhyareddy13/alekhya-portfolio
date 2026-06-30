import { motion } from "framer-motion";


const researchItems = [

{
title:
"AI-Based Multi-Disease Detection Using Machine Learning and Convolutional Neural Networks",

type:
"Research Paper / AI Healthcare Research",

description:
"Developed an AI-driven healthcare diagnostic system using machine learning and deep learning approaches. Built multiple disease prediction models including diabetes, heart disease, kidney disease, Parkinson's disease, liver disease, and CNN-based medical image classification models for healthcare applications.",

technologies:[
"Machine Learning",
"Deep Learning",
"CNN",
"Python",
"TensorFlow",
"Flask"
]

},


{
title:
"An Exploration of Neural Networks, Deep Neural Networks and their Architectures",

type:
"Conference Presentation",

description:
"Presented research on neural network fundamentals, deep neural network architectures, and their applications in modern artificial intelligence systems at the Artificial Intelligence and Big Data Conference, Andhra University.",

technologies:[
"Neural Networks",
"Deep Learning",
"CNN",
"RNN",
"Artificial Intelligence"
]

}


];


export default function Research(){


return(

<section

id="research"

className="
py-24
bg-transparent
text-white
">


<div className="
max-w-6xl
mx-auto
px-6
">


<motion.h2

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

className="
text-4xl
font-bold
text-cyan-400">

Research & Publications

</motion.h2>



<div className="
grid
md:grid-cols-2
gap-8
mt-12">


{

researchItems.map((item,index)=>(


<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*0.2}}

className="
bg-white/10
backdrop-blur-xl
rounded-2xl
border
border-white/20
shadow-xl
p-8
">


<p className="
text-cyan-400
font-semibold">

{item.type}

</p>



<h3 className="
text-xl
font-bold
mt-3">

{item.title}

</h3>



<p className="
mt-5
text-gray-300
leading-7">

{item.description}

</p>



<div className="
flex
flex-wrap
gap-3
mt-6">


{
item.technologies.map((tech,i)=>(

<span

key={i}

className="
px-3
py-1
rounded-full
bg-purple-500/20
text-sm">

{tech}

</span>

))
}


</div>



</motion.div>


))

}


</div>


</div>


</section>

)

}