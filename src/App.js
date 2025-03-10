import React from 'react';

import { Footer, Blog, History, Features, WhatIsReact, Header, Stage } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatIsReact />
    <Features />
    <History />
    <CTA />
    <Blog />
    <Stage />
    <Footer />
  </div>
);

export default App;
