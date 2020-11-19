import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   max-width: 500px;
`

const Content = styled.div`
   padding: 20px;
`

export default {
   component: CardWrapper,
   title: 'Atoms/CardWrapper',
}

export const Basic = () => (
   <Wrapper>
      <CardWrapper>
         <Content>Lorem ipsum dolor sit amet</Content>
      </CardWrapper>
   </Wrapper>
)
