import React from 'react';
import {
  InputContainer, SimpleWindowTitle, Button, QuestionLink,
} from '../../components/index';
import './register-page.css';

const RegisterPage = ({ onSignupButtonClick }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (evt) => setName(evt.target.value);
  const handleEmailChange = (evt) => setEmail(evt.target.value);
  const handlePasswordChange = (evt) => setPassword(evt.target.value);

  const handleSignup = () => onSignupButtonClick(name, email, password);

  return (
    <main className='register-page'>
      <section className='register-page__content'>
        <SimpleWindowTitle title='Добро пожаловать!' />
        <form className='register-page__form'>
          <fieldset className='register-page__inputs'>
            <InputContainer
              inputName='Имя'
              inputValue={name}
              inputType='text'
              isRequired
              inputOnChange={handleNameChange}
            />
            <InputContainer
              inputName='E-mail'
              inputValue={email}
              inputType='email'
              isRequired
              inputOnChange={handleEmailChange}
            />
            <InputContainer
              inputName='Пароль'
              inputValue={password}
              inputType='password'
              inputPlaceholder='Ваш пароль'
              isRequired
              inputOnChange={handlePasswordChange}
            />
          </fieldset>
          <Button onButtonClick={handleSignup} buttonType='button' size='big' text='Зарегистрироваться' />
        </form>
        <QuestionLink question='Уже зарегистрированы?' linkText='Войти' linkTo='/signin' />
      </section>
    </main>
  );
};

export default RegisterPage;
