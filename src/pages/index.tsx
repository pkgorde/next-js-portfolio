import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Prem | Data Scientist</title>
				<meta
					name="description"
					content="I am a Data scientist, working with medical research data science projects, including LLM integration and full stack support."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="overflow-x-clip">
				<Main />
				<About />
				<Skills />
				<Experience />
				{/* <Projects /> */}
				<Contact />
			</div>
		</div>
	);
}
