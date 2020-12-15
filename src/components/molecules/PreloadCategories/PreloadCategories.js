import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Category = styled(PreloadImage)`
   margin: 0 5px;
   height: 20px;
   border-radius: 10px;
   width: ${({ width }) => width};
   animation-delay: ${({ delay, globaldelay }) => (delay || 0) + globaldelay}s;
`

const CategoriesWrapper = styled.div`
   display: flex;
   margin-top: 10px;
   margin-bottom: 20px;
`

const PreloadCategories = ({ delay: globalDelay, ...props }) => (
   <CategoriesWrapper {...props}>
      <Category width="80px" globaldelay={globalDelay} />
      <Category width="90px" delay={0.06} globaldelay={globalDelay} />
   </CategoriesWrapper>
)

PreloadCategories.propTypes = {
   delay: PropTypes.number,
}

PreloadCategories.defaultProps = {
   delay: 0,
}

export default PreloadCategories
