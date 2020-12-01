import styled, { keyframes } from 'styled-components'

const PulseAvatar = keyframes`
   from {
      opacity: 1;
      transform: scale(0);
   }
   to {
      opacity: 0;
      transform: scale(1);
   }
`

const PulseCircle = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const PreloadAbout = styled.div`
   height: 450px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   ::before {
      content: '';
      display: block;
      width: 128px;
      height: 128px;
      border-radius: 50%;
      background: ${({ theme }) => theme.transparent.white.mid};
      animation: ${PulseAvatar} 1s ease-out infinite;
   }

   ::after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: ${({ theme }) => theme.transparent.white.soft};
      animation: ${PulseCircle} 1s ease-out alternate-reverse infinite;
   }
`

export default PreloadAbout
