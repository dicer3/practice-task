import './App.css';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import HeadTailPage from './components/HeadTailPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/head-tail' element={<HeadTailPage />} />
          <Route path="*" element={<p>404</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
