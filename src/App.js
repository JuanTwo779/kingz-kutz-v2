import React from 'react';

import { Barber, FindUs, Footer, Gallery, Header, Intro, Services, Rules } from './container';



import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />

    <Header />
    
    <Barber />

    <Services/>
    
    <Intro />

    <Rules />

    <Gallery />

    <FindUs />
    
    <Footer />
  </div>
);

export default App;

// 4 41 03
