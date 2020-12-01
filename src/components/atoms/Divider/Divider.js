import styled from 'styled-components'

const Divider = styled.div`
   height: ${({ small }) => (small ? 40 : 80)}px;
`

export default Divider
