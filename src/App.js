import React from 'react';

import { Barber, FindUs, Footer, Gallery, Header, Intro, Services, Rules, Hero} from './container';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div>
    <Navbar />

    {/* <Header /> */}

    <Hero />
    
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