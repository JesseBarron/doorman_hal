import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import colors from '../../shared/colors';

const defaultButtonProps = {
  theme: {
    color: '#5A7D7C',
  }
}


const HollowButton = styled.button`
  cursor: pointer;
  width: 28%;
  border: 4px solid ${props => props.theme.backgroundColor };
  color: ${props => props.theme.fontColor};
  border-radius: 8px;
  background: transparent;
  font-weight: 700;
  padding: 8px;
  margin-top: 8px;
`

HollowButton.defaultProps = defaultButtonProps;


const FilledButton = styled.button`
  cursor: pointer;
  width: 28%;
  border: 4px solid ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
  border-radius: 8px;
  background: ${props => props.theme.backgroundColor};
  font-weight: 700;
  padding: 8px;
  margin-top: 8px;
`
HollowButton.defaultProps = defaultButtonProps;


const ButtonTypes = { // This might need to be extracted to it's own file to be used for different components?
  'normal': {
    backgroundColor: '#5A7D7C',
    fontColor: colors.white,
  },
  'bright': {
    backgroundColor: "#DADFF7",
    fontColor: colors.darkGreen
  },
  'special': {
    backgroundColor: colors.purple,
    fontColor: colors.white
  },
  'specialAlt': {
    backgroundColor: colors.neonGreen,
    fontColor: colors.darkGreen
  }
} 

export default function Button({ children, onClick, buttonStyle, type, filled = true }) {
  const theme = {
    type: buttonStyle,
    backgroundColor: ButtonTypes[buttonStyle].backgroundColor,
    fontColor: ButtonTypes[buttonStyle].fontColor
  }

  return (
    <>
    {
      filled
        ? <ThemeProvider theme={theme}>
            <FilledButton onClick={ onClick }>
              {children}  
            </FilledButton>
          </ThemeProvider>
        : <ThemeProvider theme={theme}>
            <HollowButton onClick={ onClick }>
              {children}  
            </HollowButton>
          </ThemeProvider>
    }
    </>
  )
}
