import React from 'react';
import {
  InputContainer, SimpleWindowTitle, Button, QuestionLink,
} from '../../components/index';
import './login-page.css';
import { useFormWithValidation } from '../../utils/custom-hooks/use-form';

const LoginPage = ({ onSigninButtonClick }) => {
  const [loginError, setLoginError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { isValid, values, errors, resetForm, handleChange } = useFormWithValidation();

  const handleSignin = () => {
    setIsLoading(true)
    onSigninButtonClick(values.signinEmail, values.signinPassword)
      .then(() => {
        resetForm()
        setIsLoading(false);
      })
      .catch((err) => {
        setLoginError(err)
        setIsLoading(false);
      })
  };

  const handleInputChange = (evt) => {
    handleChange(evt);
    setLoginError('');
  };

  

  return (
    <main className='login-page'>
      <section className='login-page__content'>
        <SimpleWindowTitle title='Добро пожаловать!' />
        <form className='login-page__form'>
          <fieldset className='login-page__inputs'>
            <InputContainer
              inputTitle='E-mail'
              inputValue={values.signinEmail}
              inputType='email'
              isRequired
              inputName='signinEmail'
              inputOnChange={handleInputChange}
              inputErrors={errors.signinEmail}
              isInputActive={!isLoading}
            />
            <InputContainer
              inputTitle='Пароль'
              inputValue={values.signinPassword}
              inputType='password'
              inputPlaceholder='Ваш пароль'
              isRequired
              inputName='signinPassword'
              inputOnChange={handleInputChange}
              inputErrors={errors.signinPassword}
              isInputActive={!isLoading}
            />
          </fieldset>
          <div className='login-page__button-container'>
            <p className='login-page__error'>{loginError}</p>
            <Button active={isValid || !isLoading} onButtonClick={handleSignin} buttonType='button' size='big' text='Войти' />
          </div>
        </form>
        <QuestionLink question='Ещё не зарегистрированы?' linkText='Регистрация' linkTo='/signup' />
      </section>
    </main>
  );
};

export default LoginPage;
