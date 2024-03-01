import { Router, useRoutes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Layout from './components/Layout/Layout';
import Education from './pages/Education/Education';
import Healthcare from './pages/Healthcare/Healthcare';
import Landingpage from './pages/LandingPage/Landingpage';
import Searchresult from './pages/SearchResult/searchresult';


function App() {
  const elements = useRoutes([
    { path: '', element: <Landingpage /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'infrastruktur', element: <Infrastructure /> },
    { path: 'pendidikan', element: <Education /> },
    { path: 'kesehatan', element: <Healthcare /> },
    { path: 'result', element: <Searchresult /> } 
  ]);

  // Check if the current route is not the Landingpage route
  const isLandingPageRoute = window.location.pathname === '/';
  const renderLayout = !isLandingPageRoute;

  return (
    <>
      {renderLayout && <Layout>{elements}</Layout>}
      {!renderLayout && elements}
    </>
  );
}

export default App;