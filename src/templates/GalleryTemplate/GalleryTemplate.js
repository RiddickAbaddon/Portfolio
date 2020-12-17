import Image from 'components/molecules/Image/Image'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import styled from 'styled-components'

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(198px, auto));
   overflow: hidden;
   border-radius: ${({ theme }) => theme.radius.primary};
   grid-gap: 5px;
   background: ${({ theme }) => theme.bgPrimary};
   border: 5px solid ${({ theme }) => theme.bgPrimary};
`

const StyledImage = styled(Image)`
   display: block;
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   will-change: transform;
   transition: transform 2s ease-out;
`

const ImageWrapper = styled.div`
   padding-top: 100%;
   position: relative;
   display: block;
   overflow: hidden;

   :hover ${StyledImage} {
      transform: scale(1.1);
   }
`

const GalleryTemplate = ({ gallery }) => (
   <SRLWrapper>
      <Wrapper>
         {gallery.map(({ meta: { title, asset }, path }) => (
            <ImageWrapper key={asset}>
               <StyledImage
                  alt={title}
                  isLink
                  href={`${API_URL}${path}`}
                  src={`${API_URL}${path}`}
                  thumbnail={[400]}
               />
            </ImageWrapper>
         ))}
      </Wrapper>
   </SRLWrapper>
)

GalleryTemplate.propTypes = {
   gallery: PropTypes.arrayOf(
      PropTypes.shape({
         meta: PropTypes.shape({
            title: PropTypes.string,
            asset: PropTypes.string,
         }),
         path: PropTypes.string,
      }),
   ).isRequired,
}

export default GalleryTemplate
