import { setFilter as setFilterAction } from 'actions/app'
import Badge from 'components/atoms/Badge/Badge'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-bottom: 15px;
   margin-top: -5px;

   ${({ trim }) =>
      trim &&
      css`
         height: 30px;
         overflow: hidden;
      `}
`

const StyledBadge = styled(Badge)`
   margin: 5px;

   ${({ noclick }) =>
      !noclick
         ? css`
              cursor: pointer;

              :hover {
                 color: ${({ theme }) => theme.fontPrimary};
              }
           `
         : css`
              pointer-events: none;
           `}
`

const Categories = ({ categories, language, trim, setFilter, ...props }) => {
   const [redirect, setRedirect] = useState(false)

   return (
      <Wrapper trim={trim} {...props}>
         {categories.map((category) => (
            <StyledBadge
               key={category._id}
               onClick={() => {
                  setFilter('technology', 'all')
                  setFilter('category', category.name)
                  setRedirect(true)
               }}
               noclick={trim}
            >
               #{category[language]}
            </StyledBadge>
         ))}
         {redirect && <Redirect push to="/realizations" />}
      </Wrapper>
   )
}

Categories.propTypes = {
   categories: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ).isRequired,
   language: PropTypes.string.isRequired,
   trim: PropTypes.bool,
   setFilter: PropTypes.func.isRequired,
}

Categories.defaultProps = {
   trim: false,
}

const mapDispatchToProps = (dispatch) => ({
   setFilter: (type, value) => dispatch(setFilterAction(type, value)),
})

export default connect(null, mapDispatchToProps)(Categories)
