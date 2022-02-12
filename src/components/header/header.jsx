import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Account from '../account/account';
import Button from '../button/button';
import './header.css';
import useWindowDimensions from '../../utils/custom-hooks/use-window-dimensions';
import { PopupsContext, CurrentUserContext } from '../../contexts/index';

const Header = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isLoggedIn = currentUser?.email
  const { width } = useWindowDimensions();
  const { isExact: mainPageMatch } = useRouteMatch('/');
  const history = useHistory();
  const { setIsSlideMenuOpen } = React.useContext(PopupsContext);

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
        {isLoggedIn && width > 780 && <Navigation />}
        <div className='headar__menu'>
          {isLoggedIn && width > 780 && <Account />}
          {isLoggedIn && width < 780 && <button onClick={burgerClickHandler} className='header__burger' />}
          {!isLoggedIn
            && (
            <div className='header__auth'>
              <Link to='/signup' className='app__link-animation header__link'>Регестрация</Link>
              <Button active onButtonClick={onSigninClick} buttonType='button' size='small' text='Войти' />
            </div>
            )}
        </div>
      </div>

    </header>
  );
};

export default Header;
