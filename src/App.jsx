import { Router, useRoutes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Layout from './components/Layout/Layout';


function App() {
  const elements = useRoutes([
    { path: '', element: <Dashboard /> },
    { path: 'infrastructure', element: <Infrastructure /> } 
  ])
  return (
      <Layout>
        {elements}
      </Layout>
  )
}

export default App
