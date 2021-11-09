import React from 'react';
import { Header } from '../../components/index';
import './profile-page.css';
import { CurrentUserContext } from '../../contexts';
import { useFormWithValidation } from '../../utils/custom-hooks/use-form';

const ProfilePage = ({ onSignoutButtonClick, onUpdateButtonClick }) => {
  const [updateError, setUpdateError] = React.useState('');
  const { currentUser } = React.useContext(CurrentUserContext);
  
  const { isValid, values, errors, resetForm, handleChange } = useFormWithValidation();

  const resetProfileForm = () => resetForm({
    profileName: currentUser.name,
    profileEmail: currentUser.email,
  });

  React.useEffect(() => {
    resetProfileForm();
  }, [currentUser]);

  const handleUpdateUserData = () => {
    if (currentUser.email !== values.profileEmail || currentUser.name !== values.profileName) {
      onUpdateButtonClick(values.profileName, values.profileEmail)
        .catch((err) => {
          resetProfileForm();
          setUpdateError(err);
        } )
    }
  };

  const handleInputChange = (evt) => {
    handleChange(evt);
    setUpdateError('');
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
                  onChange={handleInputChange}
                  value={values.profileName}
                  required
                  minLength='2'
                  maxLength='30'
                  className='profile-page__value'
                  name='profileName'
                />
                <span className='profile-page__input-error'>{errors.profileName}</span>
              </div>
              <div className='profile-page__value-container'>
                <span className='profile-page__var'>E-mail</span>
                <input
                type='email'
                onChange={handleInputChange}
                value={values.profileEmail}
                required
                className='profile-page__value'
                name='profileEmail'
                />
                <span className='profile-page__input-error'>{errors.profileEmail}</span>
              </div>
            </div>
            <div className='profile-page__buttons'>
              <p className='profile-page__update-error'>{updateError}</p>
              <button
                type='button'
                onClick={handleUpdateUserData}
                disabled={!isValid}
                className={`
                  app__link
                  app__link-animation
                  profile-page__button
                  profile-page__button_edit
                  ${!isValid && 'profile-page__button_inactive'}
                `}
              >Редактировать</button>
              <button
                type='button'
                onClick={onSignoutButtonClick}
                className='
                  app__link
                  app__link-animation
                  profile-page__button
                  profile-page__button_signout
                '>Выйти из аккаунта</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
