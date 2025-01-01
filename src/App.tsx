import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import SportsCategories from './components/Sports/SportsCategories';
import Registration1 from './components/Registration/Registration1';
import Login from './components/Login/LoginPage';
import './styles/animations.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Dashboard />
                <SportsCategories />
              </>
            } />
            <Route path="/students/register" element={<Registration1 value='student'/>} />
            <Route path="/institutions/register" element={< Registration1 value='institution'/>} />
            <Route path="/institutions/signin" element={<Login userType='institution' />} />
            <Route path="/students/signin" element={<Login userType='student' />} />
            {/* <Route path="/sports/:sport" element={<div>Sport Details Page</div>} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
