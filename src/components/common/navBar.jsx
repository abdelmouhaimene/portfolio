import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import useLangue from "../../hooks/useLangue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const NavBar = (props) => {
	const { active } = props;
	const {t,toggleLangue} = useLangue()
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/"> {t("Home")} </Link>
								
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">{t("About")}</Link>
							</li>
							<li
								className={
									active === "skills"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/skills">{t("Skills")}</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">{t("Articles")}</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">{t("Contact")}</Link>
							</li>
							<li className='langueToggle' >
								<FontAwesomeIcon 								
									style={{ fontSize: "16px" }}
									icon={faGlobe}
									onClick={toggleLangue}
								/> 
								<span> {t("FR")}</span>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
