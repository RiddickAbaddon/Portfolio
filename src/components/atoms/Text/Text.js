import styled, { css, keyframes } from 'styled-components'

const Show = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const Text = styled.p`
   margin: 0;
   font-size: ${({ small, theme }) => (small ? theme.fontSize.s : theme.fontSize.m)};
   text-align: center;
   line-height: ${({ theme }) => theme.lineMain};
   ${({ small }) =>
      !small &&
      css`
         animation: ${Show} 0.5s ease-out;
      `}
   ${({ lineclamp, theme }) =>
      lineclamp &&
      css`
         display: -webkit-box;
         -webkit-line-clamp: ${lineclamp};
         -webkit-box-orient: vertical;
         overflow: hidden;
         height: ${theme.lineMainNumber * lineclamp}em;
      `}
`

export default Text
