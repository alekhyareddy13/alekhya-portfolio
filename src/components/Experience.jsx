import {motion} from "framer-motion";


const experiences=[


{
role:"Software Engineer",
company:"ASM Technologies Ltd",
duration:"Jun 2025 – Apr 2026",
points:[
"Developed Python and C# modules for industrial automation systems to improve software reliability.",
"Enhanced software quality through testing and analysis to support automation development workflows."
]
},


{
role:"Machine Learning Intern",
company:"Dr. PallemSetti Center for Research and Technology",
duration:"Dec 2024 – Apr 2025",
points:[
"Built an offline ride-booking prototype API enabling functionality in regions with limited connectivity.",
"Optimized CNN and RNN models for ML accelerator research using MATLAB."
]
},


{
role:"Salesforce Launchpad Trainee",
company:"PwC",
duration:"Feb 2024 – Jul 2024",
points:[
"Strengthened software development practices through Salesforce workflows and enterprise application training."
]
},


{
role:"Software Intern",
company:"Adept Analytix",
duration:"Oct 2023 – Dec 2023",
points:[
"Developed an Elasticsearch connector using Core Java and Maven within a startup environment."
]
},


{
role:"Cultural & Socio Head",
company:"AU United, Andhra University",
duration:"2023 – 2025",
points:[
"Led cultural and social initiatives for two years while managing student teams and coordinating university activities."
]
}


];


export default function Experience(){


return(

<section

id="experience"

className="
py-24
bg-gradient-to-r
from-indigo-950/20
via-transparent
to-blue-950/20
text-white
">

<div className="
max-w-5xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-cyan-400">

Experience

</h2>



<div className="
mt-12
space-y-10
">


{
experiences.map((exp,index)=>(


<motion.div

key={index}

initial={{opacity:0,x:-30}}

whileInView={{opacity:1,x:0}}

transition={{delay:index*0.1}}

className="
border-l-4
border-cyan-400
pl-6">


<h3 className="
text-2xl
font-bold">

{exp.role}

</h3>


<p className="
text-cyan-400">

{exp.company}

</p>


<p className="
text-gray-400">

{exp.duration}

</p>



<ul className="
mt-4
space-y-2
text-gray-300
list-disc
ml-5">

{
exp.points.map((point,i)=>(

<li key={i}>
{point}
</li>

))
}

</ul>


</motion.div>


))

}


</div>


</div>


</section>

)

}