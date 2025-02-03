import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "public/assets/about.jpeg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
						I am a data scientist and machine learning researcher with a focus on medical data science and computer vision. 
						At UC Davis Health, I developed a Retrieval-Augmented Generation (RAG) LLM architecture to improve clinical trial document 
						analysis and fine-tuned models like GPT-4 and Llama3 for medical applications. My research includes building video 
						prediction models using LSTMs and CNNs to analyze CT-Scan Angiograms, enhancing the detection of internal 
						bleeding and aneurysms. I have also worked on AI-driven medical data synthesis and applied advanced frameworks like 
						OpenSTL for modeling sequential behavior in medical imaging. During my time at Lawrence Livermore National Laboratory, 
						I engineered feature-extraction techniques for CT scan analysis, improving system health monitoring and reducing downtime.
					</p>
					<p className="py-2 text-gray-600 text-lg">
					As a Founding Software Engineer at Tetsuwan Scientific, I am developing an AI-integrated platform for automating wet 
					lab robotic workflows. I build full-stack applications using Next.js, React, PostgreSQL, and LangChain, integrating 
					cloud authentication for seamless user management. My work includes implementing multi-agent AI systems and voice 
					transcription tools to optimize research data processing. By blending software engineering with lab automation, I aim to 
					enhance research efficiency and create scalable, AI-driven solutions for scientific applications.
					</p>
					<div className="w-[50%]">
						<Link href="/#projects">
							<p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
								Check out some of my latest projects.
							</p>
						</Link>
					</div>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<div data-aos="fade-up" data-aos-duration="1000">
						<Image src={AboutImg} className="rounded-xl " alt="/" height={800} loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
