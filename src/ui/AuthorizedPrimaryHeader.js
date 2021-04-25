import classnames from "classnames";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useAuthUser } from "../utils/AuthUser";
import logo from '../images/firebase.svg'

const AuthorizedPrimaryHeader = ({ location }) => {
	const { setLogged } = useAuthUser();
	const lightBackground = ["/projects", "/projects/add"].includes(
		location.pathname
	);

	return (
		<header className="authorized-primary-header">
			<Link
				to="/projects"
				className={classnames("logo", {
					"logo-light": !lightBackground,
				})}
			>
				<img src={logo} alt="Firebase Logo" />
				<span>Firebase</span>
			</Link>
			<nav className="primary-nav">
				<button
					onClick={() => setLogged(false)}
					className="logout text-light-tint"
				>
					Logout
				</button>
				<div className="avatar" />
			</nav>
		</header>
	);
};

export default withRouter(AuthorizedPrimaryHeader);
