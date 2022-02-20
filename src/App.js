import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/pages/Home";

import ControlledComponents1 from "./components/ControlledComponents1";
import ControlledComponents2 from "./components/ControlledComponents2";

import Footer from "./components/pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exampleControlledComponents-1">
                  1. Composants contrôlés - exemple 1
                </Link>
              </li>
              <li>
                <Link to="/exampleControlledComponents-2">
                  2. Composants contrôlés - exemple 2
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route
              path="/exampleControlledComponents-1"
              component={ControlledComponents1}
            />
            <Route
              path="/exampleControlledComponents-2"
              component={ControlledComponents2}
            />

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
