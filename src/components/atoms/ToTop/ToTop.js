import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import debounce from 'lodash/debounce'
import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
   position: fixed;
   bottom: 20px;
   right: 20px;
   width: 64px;
   height: 64px;
   border-radius: 50%;
   z-index: 9;
   will-change: transform;
   transition: transform 0.2s ease-out;
   transform: scale(${({ show }) => (show ? 1 : 0)});
   pointer-events: ${({ show }) => (show ? 'all' : 'none')};
`

class ToTop extends React.Component {
   constructor(props) {
      super(props)

      this.scrollDebounce = debounce(() => this.onWindowScroll(), 300)
   }

   state = {
      showButton: false,
   }

   componentDidMount() {
      window.addEventListener('scroll', () => this.scrollDebounce())
   }

   componentDidUpdate(prevProps) {
      const {
         location: { pathname },
      } = this.props
      const {
         location: { pathname: prevPathname },
      } = prevProps
      if (pathname !== prevPathname) {
         window.scrollTo({ top: 0 })
      }
   }

   onWindowScroll() {
      const { showButton } = this.state
      const thereshold = 1000

      if (showButton && window.scrollY < thereshold) {
         this.setState({
            showButton: false,
         })
      }

      if (!showButton && window.scrollY >= thereshold) {
         this.setState({
            showButton: true,
         })
      }
   }

   render() {
      const { showButton } = this.state
      return (
         <ButtonWrapper show={showButton}>
            <ArrowButton
               direction="up"
               onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
               }}
            />
         </ButtonWrapper>
      )
   }
}

ToTop.propTypes = {
   location: PropTypes.shape({
      pathname: PropTypes.string,
   }).isRequired,
}

export default withRouter(ToTop)
