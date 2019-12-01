import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
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
