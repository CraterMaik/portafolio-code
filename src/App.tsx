import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const pageRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/projects", component: Projects, exact: true },
  { path: "/skills", component: Skills, exact: true },
  { path: "/contact", component: Contact, exact: true },
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
