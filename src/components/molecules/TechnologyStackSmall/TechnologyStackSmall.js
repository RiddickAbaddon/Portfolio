import Icon from 'components/atoms/Icon/Icon'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   overflow: hidden;
   background: ${({ theme }) => theme.bgSecondary};
   border-bottom-left-radius: ${({ theme }) => theme.radius.primary};
   border-bottom-right-radius: ${({ theme }) => theme.radius.primary};
   padding: 16px 8px;
   height: 64px;
`

const StyledIcon = styled(Icon)`
   flex-shrink: 0;
   margin: 0 8px;
`

const TechnologyStackSmall = ({ technologies, ...props }) => (
   <Wrapper {...props}>
      {technologies &&
         technologies.map(({ _id, image: { path }, name }) => (
            <StyledIcon key={_id} src={`${API_URL}${path}`} alt={name} title={name} small />
         ))}
   </Wrapper>
)

TechnologyStackSmall.propTypes = {
   technologies: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         image: PropTypes.shape({
            path: PropTypes.string,
         }),
      }),
   ),
}

TechnologyStackSmall.defaultProps = {
   technologies: null,
}

export default TechnologyStackSmall
