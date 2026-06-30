export default function Certifications(){


const certifications=[


"MATLAB Certified",

"Machine Learning in MATLAB Onramp — MathWorks",

"Introduction to Generative AI — Google Cloud",

"Journey to Cloud: Envisioning Your Solution — IBM",

"Exploratory Data Analysis for Machine Learning — IBM",

"Getting Started with Enterprise-grade AI — IBM",

"Microsoft Azure Fundamentals",

"Introduction to Web Development — University of California Davis"


];


return(

<section

id="certifications"

className="
py-24
bg-gradient-to-r
from-violet-950/20
via-transparent
to-cyan-950/20
text-white
">


<div className="
max-w-6xl
mx-auto
px-6">


<h2 className="
text-4xl
font-bold
text-cyan-400">

Certifications

</h2>



<div className="
grid
md:grid-cols-2
gap-5
mt-10">

{

certifications.map((cert,index)=>(


<div

key={index}

className="
bg-white/10
backdrop-blur-xl
border-white/20
shadow-xlbg-white/10
backdrop-blur-xl
rounded-2xl
border
border-white/20
shadow-xl
p-8">

{cert}

</div>


))

}


</div>


</div>


</section>

)

}