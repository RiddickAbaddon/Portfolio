import BackgroundSection from 'components/atoms/BackgroundSection/BackgroundSection'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   max-width: 500px;
`

export default {
   component: BackgroundSection,
   title: 'Atoms/BackgroundSection',
   argTypes: {
      background: {
         control: {
            type: 'select',
            options: ['top', 'center', 'bottom'],
         },
      },
   },
}

export const Basic = ({ background }) => (
   <BackgroundSection background={background}>
      <Wrapper>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac
            elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Fusce sit amet odio malesuada, finibus ex id, semper leo. Suspendisse convallis
            turpis ut euismod semper. Nam volutpat tempus est in blandit. Aliquam sit amet libero
            vel tellus semper sagittis. In in porta massa.
         </p>
         <p>
            Cras id mauris est. Duis et ex condimentum, ultrices lectus at, venenatis est. Aenean id
            finibus risus. Maecenas consectetur erat eget arcu molestie tristique. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse imperdiet, orci mattis ullamcorper
            fringilla, felis est suscipit nunc, in venenatis libero libero lacinia nisl. Maecenas
            rutrum porta arcu, sit amet fringilla sem sodales quis. Ut ex felis, luctus non nunc at,
            scelerisque pulvinar dui. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Praesent interdum congue dolor et tincidunt. Donec
            hendrerit commodo tortor eu semper. Curabitur ac tempus ex. Suspendisse tincidunt nunc
            et lacus vehicula sagittis. Praesent ante ligula, sollicitudin vel volutpat eget,
            efficitur pharetra augue. Mauris aliquam tortor dolor, nec faucibus turpis feugiat
            vitae.
         </p>
         <p>
            Nunc pellentesque efficitur suscipit. Phasellus quis dignissim arcu. Sed aliquet orci
            purus, a viverra quam ornare sed. Sed eu nibh metus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras at turpis justo. Phasellus finibus quam mauris, et
            tempor dolor facilisis feugiat. Mauris felis ipsum, pulvinar sed eleifend in, volutpat
            et quam. Cras ultrices est at luctus sagittis. Mauris condimentum sapien ac turpis
            ornare mattis. Ut quis massa sit amet sem tempor tristique sed eu eros. Maecenas
            venenatis venenatis interdum. Donec egestas, nulla eget lacinia fringilla, lorem metus
            elementum magna, non ultrices dui magna vel lorem. Nulla non laoreet risus. Praesent id
            ante aliquet, molestie elit vitae, malesuada turpis. Cras quis nibh quis elit tincidunt
            viverra non interdum magna.
         </p>
      </Wrapper>
   </BackgroundSection>
)

Basic.propTypes = {
   background: PropTypes.string.isRequired,
}

Basic.args = {
   background: 'top',
}
