import React from 'react';
import {
  Promo,
  AboutMe,
  AboutProject,
  NavTab,
  Portfolio,
  Techs,
  Footer,
  Header,
} from '../../components';
import './main-page.css';

const MainPage = () => {

  return (
    <>
      <Header />
      <main className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
};

export default MainPage;
