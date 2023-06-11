import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import useLangue from "../../hooks/useLangue";
import Card from "../common/card";
import ndw from "../../assets/ndw.jpg";
import msnfcf from "../../assets/msnfcf.png";
import "./styles/works.css";

const Works = () => {
	const {t} = useLangue()
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title={t("Work")}
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-all"> 
								<img
									src= {ndw}
									alt="New Digital Way"
									className="work-image"
								/>
								<div className="work-all-title">
									<div className="work-title">New Digital Way</div>
									<div className="work-subtitle">
										{t("Full-stack web developper")}
									</div>
								</div>
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<div className="work-all"> 
								<img
									src={msnfcf}
									alt="msnfcf"
									className="work-image"
								/>
								<div className="work-all-title">
									<div className="work-title">MSNFCF - <span>{t("Intern")}</span></div>
									<div className="work-subtitle">
										{t("Full-stack web developper")}
									</div>
								</div>
							</div>
							<div className="work-duration">2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
