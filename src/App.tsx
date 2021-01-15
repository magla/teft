import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from "./components/page";
import { CirclePage } from "./pages";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/circles/purple">
            <CirclePage color="purple" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
