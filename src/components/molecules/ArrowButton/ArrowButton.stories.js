import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import PropTypes from 'prop-types'
import React from 'react'
import StoryRouter from 'storybook-react-router'

export default {
   component: ArrowButton,
   title: 'Molecules/ArrowButton',
   decorators: [StoryRouter()],
   argTypes: {
      direction: {
         control: {
            type: 'select',
            options: ['right', 'down', 'left', 'up'],
         },
      },
   },
}

export const Basic = ({ direction }) => <ArrowButton direction={direction} />

Basic.propTypes = {
   direction: PropTypes.string.isRequired,
}

Basic.args = {
   direction: 'right',
}
