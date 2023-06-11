import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllSkills from "../components/skills/allSkills";
import useLangue from "../hooks/useLangue";
import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	const {t} = useLangue()
	useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							{t("Things I’ve made trying to put my dent in theuniverse.")}
						</div>

						<div className="subtitle projects-subtitle">
							{t("My love for programming has always motivated me to learn more technologies and develop myself in this field. I started my way from algorithms and C language to object-oriented programming and web development. I mastered some languages, the most important of which are Java and JavaScript, in addition to HTML and CSS. I have experience with Dart and Python, but I'm still on my way to mastering it well.")}
						</div>

						<div className="projects-list">
							<AllSkills />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
