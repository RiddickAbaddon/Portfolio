import emptyIcon from 'assets/svg/empty.svg'
import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import Divider from 'components/atoms/Divider/Divider'
import SVG from 'components/atoms/SVG/SVG'
import Text from 'components/atoms/Text/Text'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled(CardWrapper)`
   padding: 30px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const NoContent = ({ children }) => (
   <Wrapper>
      <SVG src={emptyIcon} alt="no content" />
      <Divider size="small" />
      <Text>{children}</Text>
   </Wrapper>
)

NoContent.propTypes = {
   children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default NoContent
