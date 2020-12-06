import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: calc(100vh - 104px);
`

const CenterPageTemplate = ({ children }) => <Wrapper>{children}</Wrapper>

CenterPageTemplate.propTypes = {
   children: PropTypes.element.isRequired,
}

export default CenterPageTemplate
