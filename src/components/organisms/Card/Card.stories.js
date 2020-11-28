import Card from 'components/organisms/Card/Card'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import technologies from 'testData/technologies'

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;
`

const CardWrapper = styled.div`
   width: 310px;
`

const tags = ['Aplikacje', 'Strony', 'Biblioteki', 'Gry', 'Szablony']

export default {
   component: Card,
   title: 'Organisms/Card',
   argTypes: {
      title: {
         control: 'text',
      },
      description: {
         control: 'text',
      },
      tagsCount: {
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

export const Basic = ({ title, description, tagsCount, technologiesCount }) => (
   <CardWrapper>
      <Card
         title={title}
         image="https://picsum.photos/400/300"
         description={description}
         tags={tags.slice(0, tagsCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
   </CardWrapper>
)

export const Cards = ({ title, description, tagsCount, technologiesCount }) => (
   <Wrapper>
      <Card
         title={title}
         image="https://picsum.photos/400/300"
         description={description}
         tags={tags.slice(0, tagsCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
      <Card
         title={title}
         image="https://picsum.photos/400/300"
         description={description}
         tags={tags.slice(0, tagsCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
      <Card
         title={title}
         image="https://picsum.photos/400/300"
         description={description}
         tags={tags.slice(0, tagsCount)}
         technologies={technologies.slice(0, technologiesCount)}
      />
   </Wrapper>
)

Basic.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   tagsCount: PropTypes.number.isRequired,
   technologiesCount: PropTypes.number.isRequired,
}

Basic.args = {
   title: 'Przykładowy tytuł',
   description:
      'Aplikacja oparta o framework React wykonana przeze mnie za pośrednictwem firmy Intermedial. Aplikacja jest typu SPA (Single Page Autentication) z routingiem po stronie klienta. Jest zgodna z standardem PWA (Progressive Web Application).',
   tagsCount: 2,
   technologiesCount: 3,
}

Cards.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   tagsCount: PropTypes.number.isRequired,
   technologiesCount: PropTypes.number.isRequired,
}

Cards.args = {
   title: 'Przykładowy tytuł',
   description:
      'Aplikacja oparta o framework React wykonana przeze mnie za pośrednictwem firmy Intermedial. Aplikacja jest typu SPA (Single Page Autentication) z routingiem po stronie klienta. Jest zgodna z standardem PWA (Progressive Web Application).',
   tagsCount: 2,
   technologiesCount: 3,
}
