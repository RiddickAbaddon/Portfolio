import styled from 'styled-components'

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
`

export default Divider
