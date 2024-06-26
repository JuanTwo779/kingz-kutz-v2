import React from 'react';

import { Barber, FindUs, Footer, Gallery, Intro, Services, Rules, Hero, Header, Partners} from './container';
import { Navbar } from './components';
// import { header } from './container/'


import './App.css';

const App = () => (
  <div>
    <Navbar />

    {/* <Header /> */}

    <Hero />

    {/* <Partners /> */}
    
    <Barber />

    <Services/>
    
    <Intro />

    <Rules />

    <Gallery />

    <FindUs />
    
    <Footer />

    {/* <Navbar2 /> */}
  </div>
);

export default App;