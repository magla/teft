import { Breadcrumbs, Layout } from "./components";
import { CirclePage } from "./pages";

function App() {
  return (
    <Layout>
      <Breadcrumbs />
      <CirclePage color="purple" />
    </Layout>
  );
}

export default App;
