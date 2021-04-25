import { Redirect, Route, Switch } from "react-router-dom";
import AuthorizedLayout from "./layouts/AuthorizedLayout";
import UnauthorizedLayout from "./layouts/UnauthorizedLayout";
import AuthorizedRoute from "./utils/AuthorizedRoute";
import { AuthUserProvider } from "./utils/AuthUser";
import Router from "./utils/Router";

function App() {
	return (
		<Router>
			<AuthUserProvider>
				<Switch>
					<Route path="/auth" component={UnauthorizedLayout} />
					<AuthorizedRoute
						path="/projects"
						component={AuthorizedLayout}
					/>
					<Redirect to="/projects" />
				</Switch>
			</AuthUserProvider>
		</Router>
	);
}

export default App;
