import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataContext } from './api/DataContext';
import { Layout } from './components/page';
import { ShapePage, NotFoundPage } from './containers';
import { default as data } from './api/data.json';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'teft';
  });
  
  return (
    <DataContext.Provider value={data}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/circles/purple">
              <ShapePage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
