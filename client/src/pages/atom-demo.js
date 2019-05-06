import React from 'react'
import {
  StyledButton,
  StyledTextField,
  Card
} from '../components/atoms/index'

const rasin = (e) => {
  console.log("Button Clicked")
}


const onFormSubmit = (e) => {
  e.preventDefault(e);

  console.log("email ==/===/===/===/===/===/")
  console.log(e.target.email.value);

  console.log("password ==/===/===/===/===/")
  console.log(e.target.password.value);
}
export default function AtomsDemo() {
  return (
    <div style={{padding: '22px'}}>

      <h3> Buttons </h3>
      <br />

      <h4>Hollowed</h4>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} filled={false}> Default Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} filled={false} buttonStyle={'bright'}> Bright Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} filled={false} buttonStyle={'normal'}> Normal Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} filled={false} buttonStyle={'special'}> Special Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} filled={false} buttonStyle={'specialAlt'}> Special Alt Button </StyledButton>
        </li>
      </ul>
      <br/>
      <h4>Filled</h4>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin}> Default Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} buttonStyle={'bright'}> Bright Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} buttonStyle={'normal'}> Normal Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} buttonStyle={'special'}> Special Button </StyledButton>
        </li>
        <li style={{ listStyle: 'none' }}>
          <StyledButton onClick={rasin} buttonStyle={'specialAlt'}> Special Alt Button </StyledButton>
        </li>
      </ul>
      <br/>
      <hr/>

      <h3>TextInput</h3>
      <div style={{width: "20%"}}>
        <StyledTextField placeholder="Demo Text Input"></StyledTextField>
      </div>

      <h3> Card </h3>
      <div style={{ display: 'flex', justifyContent:'center'}}>
        <Card style={{width: '60%'}}>
          <div style={{padding: '20px'}}>
            <h3>Demo card</h3>
            <hr/>
            <form onSubmit={onFormSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledTextField containerStyle={{ width: '88%'}} placeholder="Email" name='email' ></StyledTextField>
                <StyledTextField containerStyle={{ width: '88%'}} placeholder="Password" type="password" name='password'></StyledTextField>
                <StyledButton filled={false} buttonStyle='normal' type="submit"> Login </StyledButton>
              </div>
            </form>
          </div>
        </Card>      
      </div>

    </div>
  )
}
