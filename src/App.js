import React from 'react';

import { Barber, FindUs, Footer, Gallery, Intro, Services, Rules, Hero, Header, Partners, Assistant, Block} from './container';
import { Navbar } from './components';


import './App.css';

const App = () => (
  <div>
    <Navbar />

    <Hero />

    {/* <Partners /> */}
    
    <Barber />

    <Services/>
    
    <Intro />

    <Rules />

    <Gallery />

    <Block />

    <Assistant />

    <FindUs />
    
    <Footer />
  </div>
);

export default App;