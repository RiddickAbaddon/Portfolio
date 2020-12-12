import Badge from 'components/atoms/Badge/Badge'
import PropTypes from 'prop-types'
import React from 'react'
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
`

const Categories = ({ categories, language, trim, ...props }) => (
   <Wrapper trim={trim} {...props}>
      {categories.map((category) => (
         <StyledBadge key={category._id}>#{category[language]}</StyledBadge>
      ))}
   </Wrapper>
)

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
}

Categories.defaultProps = {
   trim: false,
}

export default Categories
