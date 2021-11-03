import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Account from '../account/account';
import Button from '../button/button';
import './header.css';
import useWindowDimensions from '../../utils/customHooks/use-window-dimensions';
import SlideMenuContext from '../../contexts/slide-menu-context';

const Header = () => {
  const isLogin = true;

  const { width } = useWindowDimensions();
  const { isExact: mainPageMatch } = useRouteMatch('/');
  const history = useHistory();
  const setIsSlideMenuOpen = React.useContext(SlideMenuContext);

  const burgerClickHandler = () => {
    setIsSlideMenuOpen(true);
  };

  const onSigninClick = () => {
    history.push('/signin');
  };

  return (
    <header className={`
    header
    ${mainPageMatch && 'header_position_main'}
    `}
    >
      <div className='header__content'>
        <Link className='header__logo-link' to='/' />
        {isLogin && width > 780 && <Navigation />}
        <div className='headar__menu'>
          {isLogin && width > 780 && <Account />}
          {isLogin && width < 780 && <button onClick={burgerClickHandler} className='header__burger' />}
          {!isLogin
            && (
            <div className='header__auth'>
              <Link to='/signup' className='app__link-animation header__link'>Регестрация</Link>
              <Button onButtonClick={onSigninClick} buttonType='button' size='small' text='Войти' />
            </div>
            )}
        </div>
      </div>

    </header>
  );
};

export default Header;
