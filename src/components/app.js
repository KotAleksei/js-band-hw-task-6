import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import Footer from './footer';
import Main from './main/main';

function App() {
  return (
    <>
      <Header/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
