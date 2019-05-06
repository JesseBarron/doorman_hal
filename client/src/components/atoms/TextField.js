import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../shared/colors';

const StyledTextInput = styled.input`
  color: ${({ style }) => style.color};
  width: ${({ style }) => style.width };
  z-index: 2;
  height: 1.5em;
  padding-left: 8px;
  font-size: 25px;
  border: none;
  border-bottom: 4px solid ${({ style }) => style.color};
  background: transparent;
  outline: none;
`;

const TextInputLabel = styled.label`
  position: absolute;
  top: ${({ style }) => style.top };
  color: ${({ style }) => style.color};
  font-size: 20px;
  transition: all .25s ease-in;
`;

const styledTextInput = {
  color: colors.darkGreen,
  width: '100%',
}

const containerDefault = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width:'100%',
  margin: '27px 0 10px 0'
}

export default ({name, type='text', placeholder, containerStyle, textStyle, labelStyle }) => {
  const [labelProps, setLabelProps] = useState({ top: '0px', color: colors.green });
  const [textValue, setTextValue] = useState('');

  const onTextChange = (e) => {
    const { value: textInput } = e.target;
    setTextValue(textInput);
  }

  const onTextBlur = () =>
    setLabelProps({
      color: textValue ? colors.darkGreen : colors.green,
      top: textValue ? "-24px" : "0px"
    })
  
  textStyle = Object.assign({}, styledTextInput, textStyle);
  containerStyle = Object.assign({}, containerDefault, containerStyle)
  return (
    <div style={containerStyle}>
      <TextInputLabel style={labelProps}> { placeholder || "Placeholder Text"}</TextInputLabel>
      <StyledTextInput style={textStyle} onFocus={() => setLabelProps({ top: "-24px", color: colors.darkGreen })} onBlur={onTextBlur} type={type} onChange={onTextChange} value={textValue} name={name}></StyledTextInput>
    </div>
  )
}