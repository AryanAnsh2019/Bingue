import Page from "./Page";
import "./css/App.css";
import Home from "./Home";
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
            <h1>detect</h1>
          </Route>
        </Switch>
      </Page>
    </div>
  );
}

export default App;
