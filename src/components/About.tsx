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
						I am a Software Development Engineer at Amazon Web Services, working on the SageMaker Unified Studio Data 
						Engineering team. I build scalable machine learning infrastructure and develop next-generation workflow management 
						features. I spearheaded UI development for the SageMaker Model Hub: Foundation Models using React and TypeScript, 
						improving model discovery and deployment efficiency by 40%. My work spans full-stack development, data pipeline 
						engineering with AWS Lambda and Glue, and maintaining high-availability distributed systems with 99.9% reliability.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						Previously, I focused on machine learning research and AI applications across healthcare and lab automation. At UC 
						Davis Health, I built RAG systems for clinical trial analysis using fine-tuned LLMs (GPT-4, Llama3), and developed 
						video prediction models to detect aneurysms in CT scans. At Tetsuwan Scientific, I engineered an AI-integrated platform 
						for wet lab robotics, implementing multi-agent systems and voice transcription to accelerate bio-chemistry research 
						workflows by 250%. I've also contributed to statistical analysis at Lawrence Livermore National Laboratory and built 
						full-stack anomaly detection platforms at T-Mobile.
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