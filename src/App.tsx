import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DataContext } from "./api/DataContext";
import { Layout } from "./components/page";
import { CirclePage } from "./containers";
import { default as data } from './api/data.json';

function App() {
  return (
    <DataContext.Provider value={data}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/circles/purple">
              <CirclePage color="purple" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
