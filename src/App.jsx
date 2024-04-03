import { useRoutes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Layout from './components/Layout/Layout';
import Education from './pages/Education/Education';
import Healthcare from './pages/Healthcare/Healthcare';
import Landingpage from './pages/LandingPage/Landingpage';
import Datadetails from './pages/Datadetails/Datadetails';
import Search from './pages/SearchResult/SearchResult';
import About from './pages/About/About';
import Organization from './pages/Organization/Organization';



function App() {
  const elements = useRoutes([
    { path: '', element: <Landingpage /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'infrastruktur', element: <Infrastructure /> },
    { path: 'pendidikan', element: <Education /> },
    { path: 'kesehatan', element: <Healthcare /> },
    { path: 'result', element: <Search /> },
    { path: 'details', element: <Datadetails /> },
    { path: 'about', element: <About /> },
    { path: 'organisasi', element: <Organization /> }   
  ]);

  // Check if the current route is not the Landingpage or Searchresult route
  const isLandingOrResultPage = window.location.pathname === '/' || window.location.pathname === '/result' || window.location.pathname === '/details' || window.location.pathname === '/about' || window.location.pathname === '/organisasi';
  const renderLayout = !isLandingOrResultPage;

  return (
    <>
      {renderLayout && <Layout>{elements}</Layout>}
      {!renderLayout && elements}
    </>
  );
}

export default App;
