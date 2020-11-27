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
`

export default Text
