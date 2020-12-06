import { addDecorator } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import theme from 'theme/MainTheme'
import SlickSliderStyle from 'theme/SlickSliderStyle'

addDecorator((story) => {
   return (
      <>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SlickSliderStyle />
            {story()}
         </ThemeProvider>
      </>
   )
})

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
}
