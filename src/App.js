import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Genre from "./routes/Genre";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:genre">
            <Genre />
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
