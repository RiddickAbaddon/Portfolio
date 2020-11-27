import Text from 'components/atoms/Text/Text'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   max-width: 700px;
`

export default {
   components: Text,
   title: 'Atoms/Text',
   argTypes: {
      small: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ small }) => (
   <Wrapper>
      <Text small={small}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis lectus, consequat ac
         elementum non, placerat sodales quam. Nullam malesuada tristique velit vel volutpat.
         Pellentesque habitant morbi tristique
      </Text>
   </Wrapper>
)

Basic.propTypes = {
   small: PropTypes.bool.isRequired,
}

Basic.args = {
   small: false,
}
