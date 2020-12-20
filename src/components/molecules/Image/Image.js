import { fetchThumbnail as fetchThumbnailAction } from 'actions/api'
import emptyIcon from 'assets/empty.svg'
import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import { getThumbnail } from 'Utils'

const Show = keyframes`
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
`

const Pulse = keyframes`
   from {
      transform: scale(0);
      opacity: 1;
   }
   to {
      transform: scale(1);
      opacity: 0;
   }
`

const Wrapper = styled.div`
   position: relative;
   background: ${({ theme }) => theme.bgBadge};
   overflow: hidden;
`

const IMG = styled.img`
   object-fit: cover;
   width: 100%;
   height: 100%;
   ${({ show }) =>
      show &&
      css`
         animation: ${Show} 0.5s ease-out;
      `}

   ${({ src }) =>
      src === emptyIcon &&
      css`
         object-fit: scale-down;
      `}
`

const StyledPreloadImage = styled(PreloadImage)`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   display: ${({ show }) => (show ? 'block' : 'none')};
`

const PreloadPulse = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background: ${({ theme }) => theme.transparent.white.soft};
   border-radius: 50%;
   display: ${({ show }) => (show ? 'block' : 'none')};
   animation: ${Pulse} 1s ease-out infinite;
`

class Image extends React.Component {
   state = {
      loaded: false,
      error: false,
   }

   componentDidMount() {
      const { fetchThumbnail, thumbnail, src } = this.props

      if (thumbnail) {
         const width = thumbnail[0] || 200
         const height = thumbnail[1] || width

         fetchThumbnail(src, width, height)
      }
   }

   render() {
      const { src, isLink, thumbnail, thumbnails, alt, preloadAnimation, ...props } = this.props
      const { loaded, error } = this.state
      const thumbnailSrc =
         src && thumbnail && thumbnails ? getThumbnail(thumbnails, src, thumbnail) : null
      return (
         <Wrapper as={isLink ? 'a' : 'div'} {...props}>
            {src && !thumbnail && (
               <IMG
                  src={error ? emptyIcon : src}
                  alt={alt}
                  onLoad={() => this.setState({ loaded: true })}
                  onError={() => this.setState({ error: true, loaded: true })}
                  show={loaded}
               />
            )}
            {thumbnailSrc && (
               <IMG
                  src={error ? emptyIcon : thumbnailSrc}
                  alt={alt}
                  onLoad={() => this.setState({ loaded: true })}
                  onError={() => {
                     console.log('error')
                     this.setState({ error: true, loaded: true })
                  }}
                  show={loaded}
               />
            )}
            {thumbnail && !thumbnailSrc && (
               <IMG
                  src={emptyIcon}
                  alt={alt}
                  onLoad={() => this.setState({ loaded: true })}
                  show={loaded}
               />
            )}
            {preloadAnimation === 'gradient' ? (
               <StyledPreloadImage show={!loaded} />
            ) : (
               <PreloadPulse show={!loaded} />
            )}
         </Wrapper>
      )
   }
}

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   isLink: PropTypes.bool,
   thumbnail: PropTypes.arrayOf(PropTypes.number),
   fetchThumbnail: PropTypes.func.isRequired,
   thumbnails: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         url: PropTypes.string,
      }),
   ),
   preloadAnimation: PropTypes.oneOf(['gradient', 'pulse']),
}

Image.defaultProps = {
   src: null,
   alt: '',
   isLink: false,
   thumbnail: null,
   thumbnails: null,
   preloadAnimation: 'gradient',
}

const mapStateToProps = ({ api: { thumbnails } }) => ({ thumbnails })

const mapDispatchToProps = (dispatch) => ({
   fetchThumbnail: (path, width, height) => dispatch(fetchThumbnailAction(path, width, height)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Image)
