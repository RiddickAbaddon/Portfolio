import React from 'react'
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

const Wrapper = styled.section`
   width: 1000px;
   max-width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Avatar = styled.div`
   width: 128px;
   height: 128px;
   border-radius: 50%;
   background: ${({ theme }) => theme.transparent.white.mid};
   animation: ${PulseAvatar} 1s ease-out infinite;
`

const Separator = styled.div`
   height: 300px;
`

const Circle = styled.div`
   width: 16px;
   height: 16px;
   border-radius: 50%;
   background: ${({ theme }) => theme.transparent.white.soft};
   animation: ${PulseCircle} 1s ease-out alternate-reverse infinite;
`

const PreloadAbout = ({ ...props }) => (
   <Wrapper {...props}>
      <Avatar />
      <Separator />
      <Circle />
   </Wrapper>
)

export default PreloadAbout
