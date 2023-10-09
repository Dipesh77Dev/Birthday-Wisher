import './App.css'

import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoadingPage from './Components/LoadingPage';
import BirthdayGreetings from './Components/BirthdayGreetings';

function App() {
  return(
  <>
  {/* <DataValidPage /> */}

  <Routers>
    <Routes>
      <Route path = '/' element = {<HomePage />} />
      <Route path = '/loading' element = {<LoadingPage />} />
      <Route path = '/greet' element = {<BirthdayGreetings />} />
    </Routes>
  </Routers>
  </>
  )
}

export default App
