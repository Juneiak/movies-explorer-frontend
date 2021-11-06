import React from 'react';
import { Header } from '../../components/index';
import './profile-page.css';
import { CurrentUserContext } from '../../contexts';

const ProfilePage = ({ onSignoutButtonClick, onUpdateButtonClick }) => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  
  React.useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);

  const handleUpdateUserData = () => {
    onUpdateButtonClick(name, email);
  };
  // add inputs
  return (
    <>
      <Header />
      <main className='profile-page'>
        <section className='profile-page__content'>
          <h1 className='profile-page__title'>Привет, Виталий!</h1>
          <div className='profile-page__values'>
            <div className='profile-page__value-container'>
              <span className='profile-page__var'>Имя</span>
              <p className='profile-page__value'>Виталий</p>
            </div>
            <div className='profile-page__value-container'>
              <span className='profile-page__var'>E-mail</span>
              <p className='profile-page__value'>pochta@yandex.ru</p>
            </div>
          </div>
          <div className='profile-page__buttons'>
            <button type='button' onClick={handleUpdateUserData} onclassName='app__link app__link-animation profile-page__button profile-page__button_edit'>Редактировать</button>
            <button type='button' onClick={onSignoutButtonClick} className='app__link app__link-animation profile-page__button profile-page__button_signout'>Выйти из аккаунта</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
