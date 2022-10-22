import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import ProjectPage from './pages/projectPage';
import Addclientmodel from './components/AddProjectModel';
import AddProjectModel from './components/AddProjectModel';
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incomming) {
            return incomming;
          },
        },
        projects: {
          merge(existing, incomming) {
            return incomming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
