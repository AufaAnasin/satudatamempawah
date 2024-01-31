import { Router, useRoutes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Layout from './components/Layout/Layout';
import Education from './pages/Education/Education';
import Healthcare from './pages/Healthcare/Healthcare';
Healthcare



function App() {
  const elements = useRoutes([
    { path: '', element: <Dashboard /> },
    { path: 'infrastruktur', element: <Infrastructure /> },
    { path: 'pendidikan', element: <Education /> },
    { path: 'kesehatan', element: <Healthcare /> } 
  ])
  return (
      <Layout>
        {elements}
      </Layout>
  )
}

export default App
