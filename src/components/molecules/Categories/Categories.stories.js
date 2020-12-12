import Categories from 'components/molecules/Categories/Categories'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { categories } from 'testData/api'

const Wrapper = styled.div`
   max-width: 300px;
`

export default {
   component: Categories,
   title: 'Molecules/Categories',
   argTypes: {
      categoriesCount: {
         control: {
            type: 'range',
            min: 0,
            max: 5,
         },
      },
      trim: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ categoriesCount, trim }) => (
   <Wrapper>
      <Categories categories={categories.slice(0, categoriesCount)} language="pl" trim={trim} />
   </Wrapper>
)

Basic.propTypes = {
   categoriesCount: PropTypes.number.isRequired,
   trim: PropTypes.bool.isRequired,
}

Basic.args = {
   categoriesCount: 2,
   trim: false,
}
