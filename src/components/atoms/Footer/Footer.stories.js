import Footer from 'components/atoms/Footer/Footer'
import React from 'react'
import { Link } from 'react-router-dom'
import StoryRouter from 'storybook-react-router'
import styled from 'styled-components'

const Text = styled.div`
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.fontPrimary};
   text-align: center;

   a {
      color: ${({ theme }) => theme.fontPrimary};

      :hover {
         color: ${({ theme }) => theme.accentColor};
      }
   }
`

export default {
   component: Footer,
   title: 'Atoms/Footer',
   decorators: [StoryRouter()],
}

export const Basic = () => (
   <Footer>
      <Text>
         2020 © marcin-kalinowski.pl | <Link to="/cookies-policy">Polityka cookies</Link>
      </Text>
   </Footer>
)
