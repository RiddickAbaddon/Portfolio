import React from 'react'
import RealizationsSliderTemplate from 'templates/RealizationsSliderTemplate/RealizationsSliderTemplate'
import { categories, realizations, technologies } from 'testData/api'

export default {
   component: RealizationsSliderTemplate,
   title: 'Templates/RealizationsSlider',
}

export const Basic = () => (
   <RealizationsSliderTemplate
      realizations={realizations.splice(0, 9)}
      categories={categories}
      technologies={technologies}
   />
)
