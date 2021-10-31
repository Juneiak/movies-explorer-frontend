import React from 'react';
import { InputContainer, SimpleWindowTitle, Button, QuestionLink} from '../../components/index';
import './register-page.css';

const RegisterPage = () => {
  return (
    <>
    <SimpleWindowTitle title='Добро пожаловать!' />
    <main className='register-page'>
      <form className='register-page__form'>
        <InputContainer>
          <input className='register-page__input' type='text' />
        </InputContainer>

        <InputContainer>
          <input type />
        </InputContainer>

        <InputContainer>
          <input type />
        </InputContainer>
      </form>
      <div style={{'margin-bottom': '16px'}}><Button size='big' text='Зарегистрироваться' /></div>
      <QuestionLink question='Уже зарегистрированы?' linkText='Войти' linkTo='/signin' />
    </main>
    </>
  )
};

export default RegisterPage;
