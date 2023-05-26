import React from "react";
import Rating from "../common/rating";
import "./styles/skill.css";

const Skill = (props) => {
	const { logo, rating, title, description } = props;

	return (
		<React.Fragment>
			<div className="skill">

					<div className="skill-container">
						<div className="skill-title">
						<div className="skill-logo">
							<img src={logo} alt="logo" />
						</div>
							{title}
						</div>
						<div className="skill-rating"><p>efficiency:  </p><Rating rate={rating}/></div>
						<div className="skill-description">{description}</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
