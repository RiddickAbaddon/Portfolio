import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import PropTypes from 'prop-types'
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import StoryRouter from 'storybook-react-router'

export default {
   component: ArrowButton,
   title: 'Molecules/ArrowButton',
   decorators: [StoryRouter()],
   argTypes: {
      prev: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ prev }) => <ArrowButton prev={prev} />

Basic.propTypes = {
   prev: PropTypes.bool.isRequired,
}

Basic.args = {
   prev: false,
}
