import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Genre from "./routes/Genre";
import Detail from "./routes/Detail";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/movie-app">
            <Home />
          </Route>
          <Route path="/:entity/:page">
            <Genre />
          </Route>
          <Route path="/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
