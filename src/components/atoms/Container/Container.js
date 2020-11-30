import styled from 'styled-components'

const Container = styled.div`
   margin: 0 auto;
   max-width: ${({ small }) => (small ? 700 : 1000)}px;
`

export default Container
