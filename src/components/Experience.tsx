import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const TetsuwanExperience = {
		companyName: "Tetsuwan Scientific",
		role: "Founding Software Engineer",
		duration: "October 2024 - January 2025",
		activities: [
			"Spearheading development of an AI-integrated platform for wet lab robotic devices, enabling automated workflows and enhancing efficiency in bio-chemistry research.",
			"Built and maintained full-stack UI platform using Next.js, React, PostgreSQL, and Langchain to deliver solutions. Integrated GCP and Azure registrations for new users, along with psql-database management.",
			"Integrated multi-agent autonomous AI system and voice transcription/summarization features, transforming AI-generated outputs into actionable data structures for research workflows.",
			"Collaborated with Lab-automation and mechanical engineers and end-users (scientists) to design intuitive interfaces, ensuring seamless integration with lab equipment and improving usability, resulting in 250% speedup in experimentation time",
		],
	};

	const UCDavisMLExperience = {
		companyName: "UC Davis Health",
		role: "Graduate Student Researcher: ML Engineer",
		duration: "March 2024 - June 2024",
		activities: [
			"Developed a RAG LLM architecture for clinical trials document analysis, improving efficiency by 30% and generating inputs for CT.gov reports.",
			"Fine-tuned state-of-the-art LLMs (GPT-4, Claude Sonnet 3, Llama3, Mistral 8x7B, Clinical-T5-large) on medical datasets, enabling domain-specific insights.",
			"Customized AI pipelines for UC Davis Health to streamline data processing and increase reliability of automated clinical trial data analysis.",
		],
	};

	const UCDavisDSExperience = {
		companyName: "UC Davis Health",
		role: "Graduate Student Researcher: : Data Scientist",
		duration: "March 2023 - June 2024",
		activities: [
			"Engineered video prediction models (LSTMs, CNNs) on CT-Scan Angiogram data, improving detection of internal bleeding and aneurysms by 15±5%",
			"Spearheaded AI-driven medical data synthesis, creating high-quality datasets for anomaly detection in sequential CT scans.",
			"Implemented cutting-edge video prediction frameworks (OpenSTL) to model sequential behavior in medical imaging workflows.",
		],
	};

	const LLNLExperience = {
		companyName: "Lawrence Livermore National Laboratory",
		role: "Data Science Research Intern",
		duration: "July 2023 - September 2023",
		activities: [
			"Utilized advanced data science techniques such as contrast boosting and pixel density analysis to analyze sequential CT scan data for signs of system health deterioration, achieving an 80% correlation with existing features outlined in the Published Technical Report.",
			"Feature-engineered techniques to find features from CT scan analyses, showing 80±5% correlation with existing features.",
			"Collaborated with cross-functional teams to develop a comprehensive degradation over duty cycle analysis tool, aiding in the early detection of system health issues and reducing downtime by 15%.",
		],
	};
	

	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={["Tetsuwan Scientific", "UC Davis Health ML", "UC Davis Health DS", "LLNL"]}
						tabPanel={[
							<Details key={"Tetsuwan Scientific"} experienceDetails={TetsuwanExperience} />,
							<Details key={"UC Davis Health ML"} experienceDetails={UCDavisMLExperience} />,
							<Details key={"UC Davis Health DS"} experienceDetails={UCDavisDSExperience} />,
							<Details key={"LLNL"} experienceDetails={LLNLExperience} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
