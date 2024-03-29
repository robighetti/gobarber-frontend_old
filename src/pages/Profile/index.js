import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';

export default function Profile() {
  const dispath = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispath(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input type="email" name="email" placeholder="Seu endereço de email" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha Atual" />
        <Input type="password" name="password" placeholder="Nova Senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
