import SearchIcon from '@material-ui/icons/Search'
import PropTypes from 'prop-types'
import React, { createRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   width: 200px;
   height: 48px;
   position: relative;
   overflow: hidden;
   border-radius: 24px;
   display: inline-block;
`

const Input = styled.input`
   width: 200px;
   height: 48px;
   will-change: transform;
   border: none;
   border-radius: 24px;
   background: ${({ theme }) => theme.bgSecondary};
   color: ${({ theme }) => theme.fontPrimary};
   font-size: ${({ theme }) => theme.fontSize.s};
   padding-left: 24px;
   padding-right: 28px;
   transition: transform 0.3s ease-out;
   transform: translateX(${({ active }) => (active ? 0 : 152)}px);
   outline: none;

   :focus {
      transform: translateX(0px);
   }

   ::placeholder {
      color: ${({ theme }) => theme.fontSecondary};
   }
`

const IconWrapper = styled.div`
   width: 48px;
   height: 48px;
   position: absolute;
   right: 0;
   top: 0;
   border-radius: 50%;
   background: ${({ theme }) => theme.bgSecondary};
   display: flex;
   justify-content: center;
   align-items: center;
   pointer-events: none;
`

const StyledIcon = styled(SearchIcon)`
   font-size: 24px !important;
   color: ${({ theme }) => theme.fontPrimary} !important;
`

class SearchInput extends React.Component {
   constructor(props) {
      super(props)

      this.inputRef = createRef()
   }

   state = {
      value: '',
   }

   componentDidUpdate(prevProps) {
      const { defaultValue } = this.props
      const { defaultValue: prevValue } = prevProps

      if (defaultValue === '' && prevValue !== '') {
         this.setValue('')
         this.inputRef.current.value = ''
      }
   }

   setValue(value) {
      this.setState({ value })
   }

   render() {
      const { label, defaultValue, setValueCallback, ...props } = this.props
      const { value } = this.state

      return (
         <Wrapper {...props}>
            <Input
               type="search"
               active={value !== ''}
               placeholder={label}
               defaultValue={defaultValue}
               onChange={({ target: { value: changeValue } }) => {
                  this.setValue(changeValue)
                  setValueCallback(changeValue)
               }}
               ref={this.inputRef}
            />
            <IconWrapper>
               <StyledIcon />
            </IconWrapper>
         </Wrapper>
      )
   }
}

SearchInput.propTypes = {
   label: PropTypes.string.isRequired,
   setValueCallback: PropTypes.func,
   defaultValue: PropTypes.string,
}

SearchInput.defaultProps = {
   setValueCallback: () => {},
   defaultValue: '',
}

export default SearchInput
