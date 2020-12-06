import Container from 'components/atoms/Container/Container'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import PageContext from 'context/PageContext'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import { category } from 'testData/dropdown'

class Root extends React.Component {
   state = {
      lang: 'pl',
   }

   render() {
      return (
         <PageContext.Provider value={{ ...this.state }}>
            <BrowserRouter>
               <MainTemplate>
                  <Container>
                     <Dropdown options={category} label="Filtruj" defaultvalue="all" />
                  </Container>
               </MainTemplate>
            </BrowserRouter>
         </PageContext.Provider>
      )
   }
}

export default Root
