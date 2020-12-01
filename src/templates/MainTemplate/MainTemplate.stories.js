import React from 'react'
import StoryRouter from 'storybook-react-router'
import MainTemplate from 'templates/MainTemplate/MainTemplate'

export default {
   component: MainTemplate,
   title: 'Templates/MainTemplate',
   decorators: [StoryRouter()],
}

export const Basic = () => <MainTemplate />
