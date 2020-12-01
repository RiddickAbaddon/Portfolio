import Navigation from 'components/organisms/Navigation/Navigation'
import PropTypes from 'prop-types'
import React from 'react'
import StoryRouter from 'storybook-react-router'

export default {
   components: Navigation,
   title: 'Organisms/Navigation',
   decorators: [StoryRouter()],
   argTypes: {
      backlink: {
         control: 'boolean',
      },
      language: {
         control: {
            type: 'inline-radio',
            options: ['pl', 'eng'],
         },
      },
   },
}

export const Basic = ({ backlink, language }) => (
   <Navigation backlink={backlink ? '/back' : null} language={language} />
)

Basic.propTypes = {
   backlink: PropTypes.bool.isRequired,
   language: PropTypes.string.isRequired,
}

Basic.args = {
   backlink: false,
   language: 'pl',
}
