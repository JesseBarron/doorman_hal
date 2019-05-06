import React from 'react'
import styled from 'styled-components'

import {
  StyledTextField,
  StyledButton,
  Card
} from '../atoms'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 10px;
`

const FormContainer = styled.div`
  top 7rem;
  width: 80%;
  margin: auto;
  position: relative;
`

const temp = (e) => {
  e.preventDefault();
  console.log('Lol')
}

export default () => {
  return (
    <>
      <FormContainer>
        <Card>
          <h2 style={{ textAlign:'center' }} >Welcome</h2>
          <hr/>
            <LoginForm onSubmit={(e) => temp(e)}>
              <StyledTextField containerStyle={{ width: '70%' }} placeholder="Username" name="username"/>
              <StyledTextField containerStyle={{ width: '70%' }} placeholder="Password" type="password" name="username"/>
              <StyledButton filled={true} buttonStyle="normal" type='submit'> Login </StyledButton>
            </LoginForm>
        </Card>     
      </FormContainer>
    </>
  )
}
