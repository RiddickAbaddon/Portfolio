import styled from 'styled-components'

const Icon = styled.img`
   width: ${({ small }) => (small ? 32 : 64)}px;
   height: ${({ small }) => (small ? 32 : 64)}px;
   object-fit: contain;
`

export default Icon
