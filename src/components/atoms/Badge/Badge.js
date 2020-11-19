import styled from 'styled-components'

const Badge = styled.span`
   display: inline-block;
   height: 20px;
   border-radius: 10px;
   font-size: ${({ theme }) => theme.fontSize.xs};
   background: ${({ theme }) => theme.bgBadge};
   color: ${({ theme }) => theme.fontSecondary};
   text-align: center;
   line-height: 18px;
   padding: 1px 10px;
`

export default Badge
