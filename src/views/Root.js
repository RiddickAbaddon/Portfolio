import Container from 'components/atoms/Container/Container'
import Button from 'components/molecules/Button/Button'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainTemplate from 'templates/MainTemplate/MainTemplate'

const Root = () => (
   <BrowserRouter>
      <MainTemplate>
         <Container>
            <Button icon="link">Test przycisku</Button>
         </Container>
      </MainTemplate>
   </BrowserRouter>
)

export default Root
