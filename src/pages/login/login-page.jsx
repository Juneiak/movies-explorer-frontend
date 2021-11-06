import React from 'react';
import {
  InputContainer, SimpleWindowTitle, Button, QuestionLink,
} from '../../components/index';
import './login-page.css';

const LoginPage = ({ onSigninButtonClick }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (evt) => setEmail(evt.target.value);
  const handlePasswordChange = (evt) => setPassword(evt.target.value);

  const handleSignin = () => onSigninButtonClick(email, password);

  return (
    <main className='login-page'>
      <section className='login-page__content'>
        <SimpleWindowTitle title='Добро пожаловать!' />
        <form className='login-page__form'>
          <fieldset className='login-page__inputs'>
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
          <Button onButtonClick={handleSignin} buttonType='button' size='big' text='Войти' />
        </form>
        <QuestionLink question='Ещё не зарегистрированы?' linkText='Регистрация' linkTo='/signup' />
      </section>
    </main>
  );
};

export default LoginPage;
