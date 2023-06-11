import React from "react";
import Rating from "../common/rating";
import "./styles/skill.css";
import useLangue from "../../hooks/useLangue";

const Skill = (props) => {
	const { logo, rating, title, description } = props;
	const {t} = useLangue()

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
						<div className="skill-rating"><p>{t("efficiency")} :  </p><Rating rate={rating}/></div>
						<div className="skill-description">{t(description)}</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
