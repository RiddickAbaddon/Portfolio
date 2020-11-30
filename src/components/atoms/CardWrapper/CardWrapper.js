import styled from 'styled-components'

const CardWrapper = styled.div`
   background: ${({ theme }) => theme.bgPrimary};
   border-radius: ${({ theme }) => theme.radius.primary};
   box-shadow: ${({ theme }) => theme.shadow.soft};
`

export default CardWrapper
