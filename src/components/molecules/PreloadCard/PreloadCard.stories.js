import PreloadCard from 'components/molecules/PreloadCard/PreloadCard'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
   width: 310px;
`

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;
`

export default {
   component: PreloadCard,
   title: 'Molecules/PreloadCard',
}

export const Basic = () => (
   <CardWrapper>
      <PreloadCard />
   </CardWrapper>
)

export const Cards = () => (
   <Wrapper>
      <PreloadCard />
      <PreloadCard delay={0.2} />
      <PreloadCard delay={0.4} />
   </Wrapper>
)
