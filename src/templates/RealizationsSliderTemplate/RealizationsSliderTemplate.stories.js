import React from 'react'
import StoryRouter from 'storybook-react-router'
import RealizationsSliderTemplate from 'templates/RealizationsSliderTemplate/RealizationsSliderTemplate'
import { categories, realizations, technologies } from 'testData/api'

export default {
   component: RealizationsSliderTemplate,
   title: 'Templates/RealizationsSlider',
   decorators: [StoryRouter()],
}

export const Basic = () => (
   <RealizationsSliderTemplate
      realizations={realizations.splice(0, 9)}
      categories={categories}
      technologies={technologies}
      language="pl"
   />
)
