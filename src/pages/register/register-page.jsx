import React from 'react';
import {
  InputContainer, SimpleWindowTitle, Button, QuestionLink,
} from '../../components/index';
import './register-page.css';

const RegisterPage = () => {
  return (
    <main className='register-page'>
      <section className='register-page__content'>
        <SimpleWindowTitle title='Добро пожаловать!' />
        <form className='register-page__form'>
          <fieldset className='register-page__inputs'>
            <InputContainer
              inputName='Имя'
              inputValue='Виталий'
              inputType='text'
              isRequired
            />
            <InputContainer
              inputName='E-mail'
              inputValue='pochta@yandex.ru'
              inputType='email'
              isRequired
            />
            <InputContainer
              inputName='Пароль'
              inputType='password'
              inputPlaceholder='Ваш пароль'
              isRequired
            />
          </fieldset>
          <Button onButtonClick={() => {}} buttonType='submit' size='big' text='Зарегистрироваться' />
        </form>
        <QuestionLink question='Уже зарегистрированы?' linkText='Войти' linkTo='/signin' />
      </section>
    </main>
  );
};

export default RegisterPage;
