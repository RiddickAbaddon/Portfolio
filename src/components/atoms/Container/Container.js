import styled from 'styled-components'

const Container = styled.div`
   margin: 0 auto;
   max-width: ${({ small }) => (small ? 800 : 1000) + 208}px;
   padding: 0 104px;
   text-align: center;
`

export default Container
