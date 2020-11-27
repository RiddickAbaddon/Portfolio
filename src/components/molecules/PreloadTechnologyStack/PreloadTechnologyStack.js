import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import React from 'react'
import styled from 'styled-components'

const PreloadTitle = styled(PreloadImage)`
   width: 70%;
   max-width: 600px;
   margin: 0 auto;
   height: 44px;
   border-radius: 22px;
`

const IconsWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-top: 20px;
`

const PreloadIcon = styled(PreloadImage)`
   width: 64px;
   height: 64px;
   margin: 20px 10px;
   border-radius: 50%;
   animation-delay: ${({ delay }) => delay}s;
`

const getDelays = () => {
   const result = []

   for (let i = 0; i < 10; i++) {
      result.push(i * 0.035 - 0.06)
   }

   return result
}

const delays = getDelays()

const PreloadTechnologyStack = () => (
   <div>
      <PreloadTitle />
      <IconsWrapper>
         {delays.map((delay) => (
            <PreloadIcon delay={delay} />
         ))}
      </IconsWrapper>
   </div>
)

export default PreloadTechnologyStack
