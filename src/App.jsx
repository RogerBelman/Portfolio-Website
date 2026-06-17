import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile.jsx'
import Projects from './Pages/Projects.jsx'
import Experience from './Pages/Experience.jsx'
import NotFound from './Pages/NotFound.jsx'


function App() {

  return(
    <Router>
      <Routes>  
        <Route path="/" element={<Profile></Profile>}></Route>
        <Route path="/Profile" element={<Navigate to="/" replace></Navigate>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/Projects" element={<Navigate to="/projects" replace></Navigate>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>
        <Route path="/Experience" element={<Navigate to="/experience" replace></Navigate>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App
