import PreloadCard from 'components/organisms/PreloadCard/PreloadCard'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(270px, auto));
   grid-gap: ${({ smallgap }) => (smallgap ? 20 : 40)}px;
   grid-auto-rows: 489px;
   height: 510px;
   overflow: hidden;
`

const PreloadCards = ({ smallgap, ...props }) => (
   <Wrapper smallgap={smallgap} {...props}>
      <PreloadCard />
      <PreloadCard delay={0.2} />
      <PreloadCard delay={0.4} />
   </Wrapper>
)

PreloadCards.propTypes = {
   smallgap: PropTypes.bool,
}

PreloadCards.defaultProps = {
   smallgap: false,
}

export default PreloadCards
