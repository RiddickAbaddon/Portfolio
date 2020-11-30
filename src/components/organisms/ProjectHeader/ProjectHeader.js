import Heading from 'components/atoms/Heading/Heading'
import Image from 'components/molecules/Image/Image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
   width: 100%;
   max-width: 700px;
`

const StyledImage = styled(Image)`
   width: 100%;
   height: 350px;
   box-shadow: ${({ theme }) => theme.shadow.soft};
   border-bottom-left-radius: ${({ theme }) => theme.radius.primary};
   border-bottom-right-radius: ${({ theme }) => theme.radius.primary};
`

const HeadingWrapper = styled.div`
   min-height: 64px;
   border-radius: 32px;
   box-shadow: ${({ theme }) => theme.shadow.soft};
   display: inline-flex;
   align-items: center;
   justify-content: center;
   max-width: 100%;
   padding: 0 32px;
   background: ${({ theme }) => theme.bgPrimary};
   position: relative;
   top: -32px;
   left: 50%;
   transform: translateX(-50%);
`

const ProjectHeader = ({ image, title }) => (
   <Wrapper>
      <StyledImage src={image} alt={title} />
      <HeadingWrapper>
         <Heading size="h3">{title}</Heading>
      </HeadingWrapper>
   </Wrapper>
)

ProjectHeader.propTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
}

ProjectHeader.defaultProps = {
   image: null,
   title: '',
}

export default ProjectHeader
