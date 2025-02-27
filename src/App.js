import React from 'react';

import { Footer, Blog, History, Features, WhatIsReact, Header, Infoblog } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatIsReact />
    <Features />
    <History />
    <CTA />
    <Blog />
    <Infoblog />
    <Footer />
  </div>
);

export default App;
