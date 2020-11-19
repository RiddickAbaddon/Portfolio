import { addDecorator } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import theme from 'theme/MainTheme'

addDecorator((story) => {
   return (
      <>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            {story()}
         </ThemeProvider>
      </>
   )
})

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
}
