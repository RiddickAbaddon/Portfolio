import Container from 'components/atoms/Container/Container'
import PropTypes from 'prop-types'
import React from 'react'
import RealizationTemplate from 'templates/RealizationTemplate/RealizationTemplate'
import { categories, realizations, technologies } from 'testData/api'

export default {
   component: RealizationTemplate,
   title: 'Templates/RealizationTemplate',
   argTypes: {
      categoriesCount: {
         control: {
            type: 'range',
            min: 0,
            max: 5,
         },
      },
      technologiesCount: {
         control: {
            type: 'range',
            min: 0,
            max: 6,
         },
      },
   },
}

export const Basic = ({ categoriesCount, technologiesCount }) => (
   <Container small>
      <RealizationTemplate
         realization={realizations.find((x) => x.gallery && x.gallery.length)}
         categories={categories.slice(0, categoriesCount)}
         technologies={technologies.slice(0, technologiesCount)}
         language="pl"
      />
   </Container>
)

Basic.propTypes = {
   categoriesCount: PropTypes.number.isRequired,
   technologiesCount: PropTypes.number.isRequired,
}

Basic.args = {
   categoriesCount: 2,
   technologiesCount: 3,
}
