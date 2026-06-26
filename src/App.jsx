import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './layout/SiteLayout.jsx'
import Profile from './Pages/Profile.jsx'
import Projects from './Pages/Projects.jsx'
import Experience from './Pages/Experience.jsx'
import NotFound from './Pages/NotFound.jsx'


function App() {

  return(
    <Routes>
      <Route element={<SiteLayout></SiteLayout>}>
        <Route path="/" element={<Profile></Profile>}></Route>
        <Route path="/profile" element={<Navigate to="/" replace></Navigate>}></Route>
        <Route path="/Profile" caseSensitive element={<Navigate to="/" replace></Navigate>}></Route>
        <Route path="/projects" caseSensitive element={<Projects></Projects>}></Route>
        <Route path="/Projects" caseSensitive element={<Navigate to="/projects" replace></Navigate>}></Route>
        <Route path="/experience" caseSensitive element={<Experience></Experience>}></Route>
        <Route path="/Experience" caseSensitive element={<Navigate to="/experience" replace></Navigate>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    </Routes>
  );
}

export default App
