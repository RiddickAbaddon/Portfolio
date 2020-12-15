import PreloadCard from 'components/molecules/PreloadCard/PreloadCard'
import PreloadCards from 'components/molecules/PreloadCard/PreloadCards'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
   width: 310px;
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

export const Cards = () => <PreloadCards />
