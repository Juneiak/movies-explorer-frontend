import React from 'react';
import {
  InputContainer, SimpleWindowTitle, Button, QuestionLink,
} from '../../components/index';
import './register-page.css';
import { useFormWithValidation } from '../../utils/custom-hooks/use-form';

const RegisterPage = ({ onSignupButtonClick }) => {
  const [registerError, setRegisterError] = React.useState('');
  const { isValid, values, errors, resetForm, handleChange } = useFormWithValidation();

  const handleSignup = () => {
    onSignupButtonClick(values.signupName, values.signupEmail, values.signupPassword)
      .then(() => resetForm())
      .catch((err) => setRegisterError(err))
  };

  const handleInputChange = (evt) => {
    handleChange(evt);
    setRegisterError('');
  };

  return (
    <main className='register-page'>
      <section className='register-page__content'>
        <SimpleWindowTitle title='Добро пожаловать!' />
        <form className='register-page__form'>
          <fieldset className='register-page__inputs'>
            <InputContainer
              inputTitle='Имя'
              inputValue={values.signupName}
              inputType='text'
              isRequired
              inputOnChange={handleInputChange}
              inputName='signupName'
              inputErrors={errors.signupName}
              maxLength={30}
              minLength={2}
            />
            <InputContainer
              inputTitle='E-mail'
              inputValue={values.signupEmail}
              inputType='email'
              isRequired
              inputOnChange={handleInputChange}
              inputName='signupEmail'
              inputErrors={errors.signupEmail}
            />
            <InputContainer
              inputTitle='Пароль'
              inputValue={values.signupPassword}
              inputType='password'
              inputPlaceholder='Ваш пароль'
              isRequired
              inputOnChange={handleInputChange}
              inputName='signupPassword'
              inputErrors={errors.signupPassword}
            />
          </fieldset>
          <div className='register-page__button-container'>
            <p className='register-page__error'>{registerError}</p>
            <Button active={isValid} onButtonClick={handleSignup} buttonType='button' size='big' text='Зарегистрироваться' />
          </div>
        </form>
        <QuestionLink question='Уже зарегистрированы?' linkText='Войти' linkTo='/signin' />
      </section>
    </main>
  );
};

export default RegisterPage;
