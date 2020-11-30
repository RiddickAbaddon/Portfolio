import styled, { css } from 'styled-components'

const Text = styled.p`
   margin: 0;
   font-size: ${({ small, theme }) => (small ? theme.fontSize.s : theme.fontSize.m)};
   text-align: center;
   line-height: ${({ theme }) => theme.line.main};
   ${({ lineclamp, theme }) =>
      lineclamp &&
      css`
         display: -webkit-box;
         -webkit-line-clamp: ${lineclamp};
         -webkit-box-orient: vertical;
         overflow: hidden;
         height: ${theme.line.mainNumber * lineclamp}em;
      `}
`

export default Text
