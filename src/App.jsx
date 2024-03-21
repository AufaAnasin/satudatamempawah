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
import Searchresult from './pages/SearchResult/searchresult';
import Datadetails from './pages/Datadetails/Datadetails';


function App() {
  const elements = useRoutes([
    { path: '', element: <Landingpage /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'infrastruktur', element: <Infrastructure /> },
    { path: 'pendidikan', element: <Education /> },
    { path: 'kesehatan', element: <Healthcare /> },
    { path: 'result', element: <Searchresult /> },
    { path: '/details', element: <Datadetails /> } 
  ]);

  // Check if the current route is not the Landingpage or Searchresult route
  const isLandingOrResultPage = window.location.pathname === '/' || window.location.pathname === '/result' || window.location.pathname === '/details';
  const renderLayout = !isLandingOrResultPage;

  return (
    <>
      {renderLayout && <Layout>{elements}</Layout>}
      {!renderLayout && elements}
    </>
  );
}

export default App;
