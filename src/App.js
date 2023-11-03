import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from './component/index';
import { Header, Footer } from './section/index';
import { Home, Broswer, Profile, Details,Palestine } from './Pages';
import ScrollToTop from './ScrollToTop'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Broswer" element={<Broswer />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Palestine" element={<Palestine />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;


