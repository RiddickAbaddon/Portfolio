import { backgroundHex, backgroundLowpoly, backgroundWeb } from 'assets'
import BackgroundSection from 'components/molecules/BackgroundSection/BackgroundSection'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   max-width: 700px;
   margin: auto;
`

const Separator = styled.div`
   padding-top: 100px;
`

const TestContent = () => (
   <Wrapper>
      <Separator />
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac
         elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat.
         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
         egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis
         turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero vel
         tellus semper sagittis. In in porta massa.
      </p>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac
         elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat.
         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
         egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis
         turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero vel
         tellus semper sagittis. In in porta massa.
      </p>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac
         elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat.
         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
         egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis
         turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero vel
         tellus semper sagittis. In in porta massa.
      </p>
      <Separator />
   </Wrapper>
)

export default {
   component: BackgroundSection,
   title: 'Molecules/BackgroundSection',
}

export const Home = () => (
   <BackgroundSection background={backgroundLowpoly}>
      <TestContent />
   </BackgroundSection>
)

export const Realizations = () => (
   <BackgroundSection background={backgroundWeb}>
      <TestContent />
   </BackgroundSection>
)

export const Hex = () => (
   <BackgroundSection background={backgroundHex} align="bottom">
      <TestContent />
   </BackgroundSection>
)
