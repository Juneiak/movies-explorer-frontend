import React from 'react';
import { Header } from '../../components/index';
import './profile-page.css';
import { CurrentUserContext } from '../../contexts';

const ProfilePage = ({ onSignoutButtonClick, onUpdateButtonClick }) => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const { currentUser } = React.useContext(CurrentUserContext);
  
  const handleNameChange = (evt) => setName(evt.target.value);
  const handleEmailChange = (evt) => setEmail(evt.target.value);

  React.useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);

  const handleUpdateUserData = () => {
    if (currentUser.email !== email || currentUser.name !== name) {
      onUpdateButtonClick(name, email);
    }
  };
  return (
    <>
      <Header />
      <main className='profile-page'>
        <section className='profile-page__content'>
          <h1 className='profile-page__title'>Привет, Виталий!</h1>
          <form className='profile-page__form'>
            <div className='profile-page__values'>
              <div className='profile-page__value-container'>
                <span className='profile-page__var'>Имя</span>
                <input
                  type='text'
                  onChange={handleNameChange}
                  value={name}
                  required
                  minLength='2'
                  maxLength='30'
                  className='profile-page__value'
                />
                <span className='profile-page__input-error'>dddddddddd ddddddddddddd dddddddddddd ddddddd dddd ddddddd dddddddddddd dddddddddd dddddddddcc cccccccc ccccc</span>
              </div>
              <div className='profile-page__value-container'>
                <span className='profile-page__var'>E-mail</span>
                <input
                type='email'
                onChange={handleEmailChange}
                value={email}
                required
                className='profile-page__value'
                />
                <span className='profile-page__input-error'>dd</span>
              </div>
            </div>
            <div className='profile-page__buttons'>
              <button type='button' onClick={handleUpdateUserData} className='app__link app__link-animation profile-page__button profile-page__button_edit'>Редактировать</button>
              <button type='button' onClick={onSignoutButtonClick} className='app__link app__link-animation profile-page__button profile-page__button_signout'>Выйти из аккаунта</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
