import styled, { keyframes } from 'styled-components'

const Preload = keyframes`
   from {
      background-position: -1000px, 0;
   }
   to {
      background-position: 1000px, 0;
   }
`

const PreloadImage = styled.div`
   width: ${({ width }) => width || '100%'};
   height: ${({ height }) => height || 'auto'};
   background-color: ${({ theme }) => theme.bgBadge};
   background-image: ${({ theme }) => theme.gradient.preload};
   background-position: 0, 0;
   background-size: 1000px 100%;
   background-repeat: no-repeat;
   animation: ${Preload} 1s ease-in-out infinite;
`

export default PreloadImage
