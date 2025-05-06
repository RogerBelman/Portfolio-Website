import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile.jsx'
import Projects from './Pages/Projects.jsx'
import Experience from './Pages/Experience.jsx'
import NotFound from './Pages/NotFound.jsx'


function App() {

  return(
    <Router>
      <Routes>  
        <Route path="/" element={<Profile></Profile>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App
