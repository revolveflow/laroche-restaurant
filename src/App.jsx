import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Landing from './pages/Landing';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
    </Routes>
  );
}
