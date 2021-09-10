import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

const pageRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/projects", component: Projects, exact: true },
]

function App() {
  return (
    <Router>
      <Switch>
        {pageRoutes.map((route, key) => {
            return (
              <Route 
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })
        }
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
