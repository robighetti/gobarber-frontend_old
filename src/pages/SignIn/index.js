import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';
import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório!'),

  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispath(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
