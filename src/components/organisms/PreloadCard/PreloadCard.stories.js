import PreloadCard from 'components/organisms/PreloadCard/PreloadCard'
import PreloadCards from 'components/organisms/PreloadCard/PreloadCards'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
   width: 310px;
`

export default {
   component: PreloadCard,
   title: 'Organisms/PreloadCard',
}

export const Basic = () => (
   <CardWrapper>
      <PreloadCard />
   </CardWrapper>
)

export const Cards = () => <PreloadCards />
