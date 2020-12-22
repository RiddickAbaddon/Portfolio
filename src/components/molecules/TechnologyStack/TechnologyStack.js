import { setFilter as setFilterAction } from 'actions/app'
import Heading from 'components/atoms/Heading/Heading'
import Icon from 'components/atoms/Icon/Icon'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

const Show = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const Wrapper = styled.section`
   animation: ${Show} 0.5s ease-out;
`

const IconsWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-top: 20px;
`

const IconLabel = styled.span`
   position: absolute;
   bottom: -5px;
   left: 50%;
   color: ${({ theme }) => theme.fontPrimary};
   font-size: ${({ theme }) => theme.fontSize.xs};
   will-change: transform;
   transition: transform 0.2s ease-out, opacity 0.2s linear;
   opacity: 0;
   transform: translate(-50%, -16px);
`

const IconWrapper = styled.div`
   width: 84px;
   height: 104px;
   padding: 20px 10px;
   position: relative;

   &:hover ${IconLabel} {
      opacity: 1;
      transform: translate(-50%, 0);
   }

   ${({ noclick }) =>
      !noclick &&
      css`
         cursor: pointer;
      `}
`

const TechnologyStack = ({ technologies, title, isLinked, setFilter, ...props }) => {
   const [redirect, setRedirect] = useState(false)
   return (
      <Wrapper {...props}>
         <Heading size="h2">{title}</Heading>
         <IconsWrapper>
            {technologies &&
               technologies.map(({ _id, image: { path }, name }) => (
                  <IconWrapper
                     key={_id}
                     onClick={() => {
                        if (isLinked) {
                           setFilter(name)
                           setRedirect(true)
                        }
                     }}
                     noclick={!isLinked}
                  >
                     <Icon src={`${API_URL}${path}`} alt={name} />
                     <IconLabel>{name}</IconLabel>
                  </IconWrapper>
               ))}
         </IconsWrapper>
         {redirect && <Redirect push to="/realizations" />}
      </Wrapper>
   )
}

TechnologyStack.propTypes = {
   title: PropTypes.string.isRequired,
   technologies: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         image: PropTypes.shape({
            path: PropTypes.string,
         }),
      }),
   ),
   isLinked: PropTypes.bool,
   setFilter: PropTypes.func.isRequired,
}

TechnologyStack.defaultProps = {
   technologies: null,
   isLinked: false,
}

const mapDispatchToProps = (dispatch) => ({
   setFilter: (value) => dispatch(setFilterAction('technology', value)),
})

export default connect(null, mapDispatchToProps)(TechnologyStack)
