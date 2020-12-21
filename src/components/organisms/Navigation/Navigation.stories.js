import Navigation from 'components/organisms/Navigation/Navigation'
import React from 'react'
import { Link } from 'react-router-dom'
import StoryRouter from 'storybook-react-router'
import styled from 'styled-components'

const ActionsWrapper = styled.div`
   margin-top: 300px;
`

const StyledLink = styled(Link)`
   color: ${({ theme }) => theme.fontPrimary};

   :hover {
      color: ${({ theme }) => theme.accentColor};
   }
`

export default {
   components: Navigation,
   title: 'Organisms/Navigation',
   decorators: [StoryRouter()],
}

export const Basic = () => (
   <>
      <Navigation />
      <ActionsWrapper>
         <StyledLink to="/page">Go to page</StyledLink>
      </ActionsWrapper>
   </>
)
