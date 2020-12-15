import React from 'react'
import StoryRouter from 'storybook-react-router'
import styled from 'styled-components'
import RealizationsGridTemplate from 'templates/RealizationsGridTemplate/RealizationsGridTemplate'
import { categories, realizations, technologies } from 'testData/api'

const Wrapper = styled.div`
   max-width: 1000px;
   margin: 0 auto;
`

export default {
   component: RealizationsGridTemplate,
   title: 'Templates/RealizationsGridTemplate',
   decorators: [StoryRouter()],
}

export const Basic = () => (
   <Wrapper>
      <RealizationsGridTemplate
         realizations={realizations}
         categories={categories}
         technologies={technologies}
      />
   </Wrapper>
)
