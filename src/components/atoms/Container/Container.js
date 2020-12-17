import styled from 'styled-components'

const Container = styled.div`
   margin: 0 auto;
   text-align: center;

   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      max-width: ${({ small }) => (small ? 800 : 1000) + 208}px;
      padding: 0 104px;
   }
   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      max-width: ${({ small }) => (small ? 800 : 1000) + 40}px;
      padding: 0 20px;
   }
`

export default Container
