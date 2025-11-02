import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const AWSExperience = {
		companyName: "Amazon Web Services (AWS)",
		role: "Software Development Engineer",
		duration: "July 2025 - Present",
		activities: [
			"Contributed to the SageMaker Unified Studio Data Engineering team, developing next-generation machine learning workflow and model management features integrated with AWS's latest service offerings.",
			"Spearheaded UI development for the new SageMaker Model Hub: Foundation Models, building scalable React/TypeScript components and integrating AWS APIs and CloudFormation resources, improving model discovery and deployment efficiency by 40%.",
			"Collaborated cross-functionally with Product Managers, UX Designers, and Senior/Principal Engineers to deliver high-impact releases under strict deadlines, consistently meeting AWS's Raising the Bar engineering standards.",
			"Developed and maintained data ingestion and monitoring pipelines for SageMaker Unified Studio and EMR Studio using AWS Lambda, S3, CloudWatch, and Glue, ensuring high availability and operational excellence.",
			"Handled on-call responsibilities, triaging and resolving production incidents across distributed services to maintain ≥99.9% reliability SLAs and deliver rapid customer issue resolution.",
			"Authored internal documentation, design proposals, and operational playbooks to improve team onboarding, knowledge sharing, and long-term system scalability.",
		],
	};

	const TMobileExperience = {
		companyName: "T-Mobile (Contract via IOPEX Technologies)",
		role: "Software Engineer",
		duration: "April 2025 - July 2025",
		activities: [
			"Developed and deployed multiple full-stack applications across Agile teams, using GitLab, Docker, and Portainer CI/CD pipelines.",
			"Architected a Statistical Anomaly Detection platform for time-series voice lane data using Python (pandas, scikit-learn, SQLAlchemy); delivered interactive dashboards via Streamlit for KPI monitoring.",
			"Led design and delivery of a data visualization dashboard platform with React.js/Vite frontend, Node.js/Express APIs, and PostgreSQL backend; managed end-to-end ETL and deployment workflows.",
		],
	};

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
						tabList={["AWS", "T-Mobile", "Tetsuwan Scientific", "UC Davis Health ML", "UC Davis Health DS", "LLNL"]}
						tabPanel={[
							<Details key={"AWS"} experienceDetails={AWSExperience} />,
							<Details key={"T-Mobile"} experienceDetails={TMobileExperience} />,
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
