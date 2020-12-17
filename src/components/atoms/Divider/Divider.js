import styled, { css } from 'styled-components'

const Divider = styled.div`
   height: ${({ size }) => {
      switch (size) {
         case 'large':
            return 80
         case 'small':
            return 20
         default:
            return 40
      }
   }}px;
   ${({ mobile }) =>
      mobile &&
      css`
         @media ${({ theme }) => theme.breakpoints.max.tablet} {
            margin-bottom: 20px;
         }
      `}
`

export default Divider
