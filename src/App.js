import { Button, styled } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import OurServices from '../src/pages/OurServices/OurServices';
import OurBlog from '../src/pages/OurBlog/OurBlog';
import PageNotFound from '../src/pages/PageNotFound/PageNotFound';
import Footer from '../src/components/Footer/Footer';


function App() {
  const MyButton = styled(Button)( ({theme}) =>  ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    size: 'large',
  }));
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="OurServices" element={<OurServices />} />
        <Route path="OurBlog" element={<OurBlog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
