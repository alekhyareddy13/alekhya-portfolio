import { motion } from "framer-motion";

export default function Navbar() {

return (
<nav className="fixed top-0 w-full z-50 bg-[#050816]/80 backdrop-blur-lg text-white">

<div className="max-w-6xl mx-auto flex justify-between items-center p-5">

<h1 className="text-xl font-bold text-cyan-400">
Alekhya Reddy
</h1>


<div className="flex gap-6 text-sm">

<a href="#about" className="hover:text-cyan-400">
About
</a>

<a href="#skills" className="hover:text-cyan-400">
Skills
</a>

<a href="#projects" className="hover:text-cyan-400">
Projects
</a>

<a href="#contact" className="hover:text-cyan-400">
Contact
</a>

</div>

</div>

</nav>
)

}