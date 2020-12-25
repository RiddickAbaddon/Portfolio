import Divider from 'components/atoms/Divider/Divider'
import Heading from 'components/atoms/Heading/Heading'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   min-height: calc(100vh - 104px);
`
const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-grow: 2;
`

const CenterPageTemplate = ({ children, title }) => (
   <Wrapper>
      <Divider size="large" />
      {title && (
         <header>
            <Heading size="h1">{title}</Heading>
         </header>
      )}
      <Container>{children}</Container>
      <Divider size="large" />
   </Wrapper>
)

CenterPageTemplate.propTypes = {
   children: PropTypes.element.isRequired,
   title: PropTypes.string,
}

CenterPageTemplate.defaultProps = {
   title: null,
}

export default CenterPageTemplate
