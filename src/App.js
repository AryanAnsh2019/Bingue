import Page from "./Page";
import "./css/App.css";
import Home from "./Home";
import Detect from "./Detect";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Page>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/translate" exact>
            <h1>translate</h1>
          </Route>
          <Route path="/detect" exact>
            <Detect />
          </Route>
        </Switch>
      </Page>
    </div>
  );
}

export default App;
