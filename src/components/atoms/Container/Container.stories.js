import Container from 'components/atoms/Container/Container'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: Container,
   title: 'Atoms/Container',
   argTypes: {
      small: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ small }) => (
   <Container small={small}>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius sapien id ex auctor
         ullamcorper at ac magna. Proin nec purus lobortis, bibendum ante mollis, interdum dolor.
         Pellentesque aliquam tellus sed dui varius, in mattis orci dapibus. Nam lobortis, eros et
         maximus dictum, sem est porta orci, in finibus odio lectus in erat. Nullam pretium quam
         lectus, at sodales turpis eleifend nec. Aliquam ullamcorper enim ac justo accumsan dictum
         mollis vitae erat. In placerat malesuada purus, sed tempus lacus mattis nec. Nunc iaculis
         ligula eget maximus feugiat. Aenean id vestibulum sem, id tempus massa. Cras aliquet diam
         lectus, non finibus libero varius eget.
      </p>
      <p>
         Donec id condimentum diam, pharetra posuere tellus. Pellentesque non magna velit. Interdum
         et malesuada fames ac ante ipsum primis in faucibus. Praesent vestibulum, mauris sit amet
         tincidunt placerat, magna ligula blandit erat, id commodo odio erat sed erat. Phasellus
         augue ex, interdum eget gravida vel, bibendum in purus. Aenean vulputate metus sit amet
         justo iaculis, sit amet semper lacus porta. Donec eget vehicula massa, sit amet semper
         ipsum.
      </p>
   </Container>
)

Basic.propTypes = {
   small: PropTypes.bool.isRequired,
}

Basic.args = {
   small: false,
}
