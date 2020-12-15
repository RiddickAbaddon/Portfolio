import { addDecorator } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import theme from 'theme/MainTheme'
import SlickSliderStyle from 'theme/SlickSliderStyle'

addDecorator((story) => {
   return (
      <>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <GlobalStyle />
               <SlickSliderStyle />
               {story()}
            </ThemeProvider>
         </Provider>
      </>
   )
})

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
}
