import React from 'react';
import styled from 'styled-components';
import colors from '../../shared/colors';

const Card = styled.div`
  background: ${({ theme }) => theme.background};
  box-shadow: 1px 6px 15px ${({ theme }) => colors['box-shadow']};
  width: ${({ theme }) => theme.width };
  padding: 10px;
`;

const defaultCardTheme = {
  background: colors.white,
  "box-shadow": `1px 6px 20px ${colors.darkGreen}`,
  width: `100%`,
}

export default ({ children, style }) => {
  const cardTheme = Object.assign({}, defaultCardTheme,  style);

  return (
    <Card theme={cardTheme}>
      {children}
    </Card>
  )
}
