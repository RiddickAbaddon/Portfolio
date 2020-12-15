import Divider from 'components/atoms/Divider/Divider'
import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import PreloadCategories from 'components/molecules/PreloadCategories/PreloadCategories'
import PreloadTechnologyStack from 'components/molecules/PreloadTechnologyStack/PreloadTechnologyStack'
import PreloadText from 'components/molecules/PreloadText/PreloadText'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: stretch;
   max-width: 1000px;
`

const PreloadHeader = styled.div`
   position: relative;
   width: 100%;
`

const PreloadHeaderImage = styled(PreloadImage)`
   height: 350px;
   border-bottom-left-radius: ${({ theme }) => theme.radius.primary};
   border-bottom-right-radius: ${({ theme }) => theme.radius.primary};
   box-shadow: ${({ theme }) => theme.shadow.soft};
`

const PreloadHeaderTitle = styled.div`
   width: 200px;
   height: 64px;
   border-radius: 32px;
   box-shadow: ${({ theme }) => theme.shadow.soft};
   background: ${({ theme }) => theme.bgPrimary};
   position: relative;
   top: -32px;
   left: 50%;
   transform: translateX(-50%);
`

const PreloadButton = styled(PreloadImage)`
   height: 80px;
   width: 200px;
   border-radius: 40px;
`

const PreloadRealization = () => (
   <Wrapper>
      <PreloadHeader>
         <PreloadHeaderImage />
         <PreloadHeaderTitle />
      </PreloadHeader>
      <PreloadCategories delay={0.1} />
      <PreloadText />
      <Divider size="medium" />
      <PreloadTechnologyStack />
      <Divider size="medium" />
      <PreloadButton />
      <Divider size="large" />
   </Wrapper>
)

export default PreloadRealization
