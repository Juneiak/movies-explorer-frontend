import React from 'react';
import { InputContainer, SimpleWindowTitle, Button, QuestionLink } from '../../components/index';
import './login-page.css';

const LoginPage = () => {

  return (
    <main className='login-page'>
      <section className='login-page__content'>
        <SimpleWindowTitle title='Добро пожаловать!' />
        <form className='login-page__form'>
          <fieldset className='login-page__inputs'>
            <InputContainer
              inputName='E-mail'
              inputValue='pochta@yandex.ru'
              inputType='email'
              isRequired={true}
            />
            <InputContainer
              inputName='Пароль'
              inputType='password'
              inputPlaceholder='Ваш пароль'
              isRequired={true}
            />
          </fieldset>
          <Button onButtonClick buttonType='submit' size='big' text='Войти' />
        </form>
        <QuestionLink question='Ещё не зарегистрированы?' linkText='Регистрация' linkTo='/signup' />
      </section>
    </main>
  )
};

export default LoginPage;
