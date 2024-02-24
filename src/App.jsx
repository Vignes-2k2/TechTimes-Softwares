import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlipkartClearenceSales from './components/FlipkartClearenceSales';
import CardBottom from './components/CardBottom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-y-hidden'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<FlipkartClearenceSales />} />
        </Routes>
      </Router>
      <CardBottom/>
      <Footer/>
    </div>
  );
};

export default App;