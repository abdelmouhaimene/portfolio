import React from "react";
import { Link } from "react-router-dom";
import useLangue from "../../hooks/useLangue";
import "./styles/footer.css";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	const {t} = useLangue()
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{t("Home")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{t("About")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/skills">{t("Skills")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">{t("Articles")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{t("Contact")}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© {year} Assila.WorkSpace {t("All Rights Reserved")}.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
