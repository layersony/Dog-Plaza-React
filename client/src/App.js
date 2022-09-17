import { Switch, Route } from "react-route-dom";
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route excat path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
