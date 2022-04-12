import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Genre from "./routes/Genre";
import Detail from "./routes/Detail";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:entity/:page">
            <Genre />
          </Route>
          <Route exact path="/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
