import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../views/Home";
import PokedexView from "../views/PokedexView";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={PokedexView} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Navigation;
