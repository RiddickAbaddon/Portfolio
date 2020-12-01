import styled from 'styled-components'

const Footer = styled.footer`
   min-height: 104px;
   background: ${({ theme }) => theme.bgPrimary};
   box-shadow: ${({ theme }) => theme.shadow.soft};
   padding: 34px 50px;
`

export default Footer
