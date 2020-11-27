import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   max-width: 700px;
`

const PreloadLine = styled(PreloadImage)`
   height: 20px;
   width: ${({ width }) => width};
   margin: 16px auto;
   border-radius: 10px;

   :first-child {
      margin-top: 8px;
   }
   :last-child {
      margin-bottom: 8px;
   }
`

const PreloadText = () => (
   <Wrapper>
      <PreloadLine width="100%" />
      <PreloadLine width="80%" />
      <PreloadLine width="90%" />
      <PreloadLine width="60%" />
   </Wrapper>
)

export default PreloadText
