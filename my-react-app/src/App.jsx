import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Header.jsx'
import Body from './Body.jsx'


function App() {

  return(
    <>
    {/*<BrowserRouter>
      <Routes>  
        <Route> */}
            <Header></Header>
            <Body></Body>
          {/*</Route>
      </Routes>
    </BrowserRouter>*/}
    </>
  );
}

export default App
