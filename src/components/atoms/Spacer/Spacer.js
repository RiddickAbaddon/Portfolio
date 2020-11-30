import styled from 'styled-components'

const Spacer = styled.div`
   height: ${({ small }) => (small ? 40 : 80)}px;
`

export default Spacer
