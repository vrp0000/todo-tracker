import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import Pending from "./Components/Pending";
import Completed from "./Components/Completed";
import HomePage from "./Components/HomePage";
import Form from "./Components/Form";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/pending" component={Pending} />
        <Route path="/completed" component={Completed} />
        <Route path="/form" component={Form} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      {localStorage.setItem("Counter", 0)} {/* Intial counter */}
    </div>
  );
}

export default App;
