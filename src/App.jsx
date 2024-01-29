import { useRoutes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const elements = useRoutes([
    {path: '', element: <Dashboard />}
  ])

  return elements
}

export default App
