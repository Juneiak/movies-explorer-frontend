import React from 'react';
import {
  Promo,
  AboutMe,
  AboutProject,
  NavTab,
  Portfolio,
  Techs
} from '../../components'

const Main = () => {

  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
};

export default Main;
