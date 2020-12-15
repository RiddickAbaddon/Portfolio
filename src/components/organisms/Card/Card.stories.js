import Card from 'components/organisms/Card/Card'
import PropTypes from 'prop-types'
import React from 'react'
import StoryRouter from 'storybook-react-router'
import styled from 'styled-components'
import { categories, realizations, technologies } from 'testData/api'

const realization = realizations[0]

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;
`

const CardWrapper = styled.div`
   width: 310px;
`

export default {
   component: Card,
   title: 'Organisms/Card',
   decorators: [StoryRouter()],
   argTypes: {
      title: {
         control: 'text',
      },
      description: {
         control: 'text',
      },
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

export const Basic = ({ title, description, categoriesCount, technologiesCount }) => (
   <CardWrapper>
      <Card
         title={title}
         image={realization.thumbnail.path}
         description={description}
         categories={categories.slice(0, categoriesCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
   </CardWrapper>
)

export const Cards = ({ title, description, categoriesCount, technologiesCount }) => (
   <Wrapper>
      <Card
         title={title}
         image={realization.thumbnail.path}
         description={description}
         categories={categories.slice(0, categoriesCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
      <Card
         title={title}
         image={realization.thumbnail.path}
         description={description}
         categories={categories.slice(0, categoriesCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
      <Card
         title={title}
         image={realization.thumbnail.path}
         description={description}
         categories={categories.slice(0, categoriesCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
   </Wrapper>
)

Basic.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   categoriesCount: PropTypes.number.isRequired,
   technologiesCount: PropTypes.number.isRequired,
}

Basic.args = {
   title: 'Przykładowy tytuł',
   description:
      'Aplikacja oparta o framework React wykonana przeze mnie za pośrednictwem firmy Intermedial. Aplikacja jest typu SPA (Single Page Autentication) z routingiem po stronie klienta. Jest zgodna z standardem PWA (Progressive Web Application).',
   categoriesCount: 2,
   technologiesCount: 3,
}

Cards.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   categoriesCount: PropTypes.number.isRequired,
   technologiesCount: PropTypes.number.isRequired,
}

Cards.args = {
   title: 'Przykładowy tytuł',
   description:
      'Aplikacja oparta o framework React wykonana przeze mnie za pośrednictwem firmy Intermedial. Aplikacja jest typu SPA (Single Page Autentication) z routingiem po stronie klienta. Jest zgodna z standardem PWA (Progressive Web Application).',
   categoriesCount: 2,
   technologiesCount: 3,
}
