import logo from './logo.svg';
import './App.css';
import HtmlHeader from './components/HtmlHeader';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import MainContent from './components/MainContent';
import StartingGuide from './pages/StartingGuide';
import Championships from './pages/Championships';
import Teams from './pages/Teams';
import Players from './pages/Players';
import About from './pages/About';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>

    <HtmlHeader />

    <Navbar />
    <Routes>

      <Route path='/' element={<MainContent />} />
      <Route path='/startingguide' element={<StartingGuide />} />
      <Route path='/championships' element={<Championships />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/players' element={<Players />} />
      <Route path='/about' element={<About />} />
      <Route path='/privacy' element={<Privacy />} />

    </Routes>
    
    <Footer />

    </BrowserRouter>
  );
}

export default App;
