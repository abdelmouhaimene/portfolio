import React from "react";

import Skill from "./skill";

import skills from "../../data/skills";

import "./styles/allSkills.css";

const AllSkills = () => {
	return (
		<div className="all-skills-container">
			{skills.map((skill, index) => (
				<div className="all-skills-skill" key={index}>
					<Skill
						logo={skill.logo}
						rating={skill.rating}
						title={skill.title}
						description={skill.description}
						linkText={skill.linkText}
						link={skill.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllSkills;
