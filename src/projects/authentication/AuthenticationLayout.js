import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../../ui/Card";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs, Tab } from "../../ui/PageHeaderTabs";
import Panel from "../../ui/Panel";
import Templates from "./Templates";
import Users from "./Users";

const SigninMethods = () => {
	return <Card style={{ height: "20em" }}>Sign-in Methods</Card>;
};

const AuthenticationLayout = ({ match, location }) => {
	return (
		<Fragment>
			{match.url === location.pathname && (
				<Redirect to={`${match.url}/users`} />
			)}
			<PageHeader title="Authentication" useMaxWidth={false}>
				<PageHeaderTabs>
					<Tab to={`${match.url}/users`}>Users</Tab>
					<Tab to={`${match.url}/signin-method`}>Sign-in method</Tab>
					<Tab to={`${match.url}/templates`}>Templates</Tab>
				</PageHeaderTabs>
			</PageHeader>
			<Panel>
				<TransitionGroup className="animated-cards">
					<CSSTransition
						key={location.key}
						timeout={600}
						classNames="animated-card"
					>
						<Switch location={location}>
							<Route
								path={`${match.path}/users`}
								component={Users}
							/>
							<Route
								path={`${match.path}/signin-method`}
								component={SigninMethods}
							/>
							<Route
								path={`${match.path}/templates`}
								component={Templates}
							/>
							<Route component={() => null} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</Panel>
		</Fragment>
	);
};

export default AuthenticationLayout;
