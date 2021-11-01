import React from 'react';
import ReactDOM from 'react-dom';
import './slide-menu.css';
import { Account } from '../index';
import SlideMenuLink from './slide-menu-link';
import SlideMenuContext from '../../contexts/slide-menu-context';

const slideMenuRoot = document.querySelector('#react-slide-menu');

const SlideMenu = () => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const setIsSlideMenuOpen = React.useContext(SlideMenuContext);
  const slideMenuRef = React.useRef()
  React.useEffect(() => {
    setIsOpen(true);
  }, [])

  const closeSlideMenu = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSlideMenuOpen(false)
    }, 300)
  }

  return ReactDOM.createPortal((
    <section onClick={closeSlideMenu} className={`slide-menu ${isOpen && 'slide-menu_opened'}`}>
      <div className={`slide-menu__container ${isOpen && 'slide-menu__container_opened'}`}>
        <button onClick={closeSlideMenu} type='button' className='slide-menu__close-button'></button>
        <div className='slide-menu__content'>
          <nav className='slide-menu__navigation'>
            <ul className='slide-menu__nav-list'>
              <SlideMenuLink linkName='Главная' linkTo='/' />
              <SlideMenuLink linkName='Фильмы' linkTo='/movies' />
              <SlideMenuLink linkName='Сохранённые фильмы' linkTo='/saved-movies' />
            </ul>
          </nav>
          <Account />
        </div>
      </div>
    </section>
  ), slideMenuRoot)
}

export default SlideMenu;