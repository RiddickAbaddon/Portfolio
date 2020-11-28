import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import PropTypes from 'prop-types'
import React, { createRef } from 'react'
import styled, { keyframes } from 'styled-components'

const Show = keyframes`
   from {
      opacity: 0;
      transform: translateY(-20px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
`

const Wrapper = styled.div`
   position: relative;
   display: inline-block;
   user-select: none;
`

const IconWrapper = styled.button`
   width: 32px;
   height: 32px;
   border: none;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   position: relative;
   margin-left: 4px;
   margin-right: -8px;
   cursor: pointer;

   ::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.transparent.white.soft};
      opacity: 0;
      transition: opacity 0.2s linear;
      border-radius: 50%;
   }

   &:hover::before {
      opacity: 1;
   }
`

const StyledIcon = styled(ArrowForwardIosRoundedIcon)`
   color: ${({ theme }) => theme.fontPrimary} !important;
   font-size: 16px !important;
   transform: rotate(${({ direction }) => (direction === 'desc' ? 90 : -90)}deg);
`

const Select = styled.select`
   display: none;
`

const Button = styled.div`
   border: none;
   height: 48px;
   color: ${({ theme }) => theme.fontPrimary};
   background: ${({ theme, active }) => (active ? theme.bgBadge : theme.bgSecondary)};
   border-radius: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   font-size: ${({ theme }) => theme.fontSize.s};
   padding: 0 24px;
   cursor: pointer;
`

const DropdownList = styled(CardWrapper)`
   padding: 10px 0;
   display: inline-flex;
   flex-direction: column;
   position: absolute;
   top: 56px;
   left: 0;
   min-width: 200px;
   animation: ${Show} 0.2s ease-out;
`

const Option = styled.button`
   font-size: ${({ theme }) => theme.fontSize.s};
   padding: 10px 20px;
   cursor: pointer;
   border: none;
   background: transparent;
   color: ${({ theme }) => theme.fontPrimary};
   text-align: left;
   position: relative;

   ::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.transparent.white.soft};
      opacity: 0;
      transition: opacity 0.2s linear;
      border-radius: ${({ theme }) => theme.radiusSecondary};
   }

   &:hover::before {
      opacity: 1;
   }
`

class Dropdown extends React.Component {
   constructor(props) {
      super(props)

      this.Select = createRef()
   }

   state = {
      isOpen: false,
      value: null,
      sortDirection: 'asc',
   }

   componentDidMount() {
      const { defaultvalue, options } = this.props
      try {
         const option = options.find((x) => x.value === defaultvalue)
         this.setState({ value: option.display })
      } catch (e) {
         this.setState({ value: e.message })
      }
   }

   handleFocusDropdown() {
      this.setState({
         isOpen: true,
      })
   }

   handleBlurDropdown(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) {
         this.setState({
            isOpen: false,
         })
      }
   }

   handleClickOption(e, value) {
      this.Select.current.value = value
      const { options } = this.props
      const option = options.find((x) => x.value === value)
      this.setState({
         value: option.display,
      })
      e.currentTarget.blur()
   }

   toggleSortDirection() {
      const { sortDirection } = this.state
      if (sortDirection === 'asc') {
         this.setState({
            sortDirection: 'desc',
         })
      } else {
         this.setState({
            sortDirection: 'asc',
         })
      }
   }

   render() {
      const { options, label, sort, defaultvalue, ...props } = this.props
      const { value, isOpen, sortDirection } = this.state

      return (
         <Wrapper
            tabIndex="0"
            onBlur={(e) => this.handleBlurDropdown.call(this, e)}
            onFocus={(e) => this.handleFocusDropdown.call(this, e)}
            {...props}
         >
            <Select ref={this.Select} defaultValue={defaultvalue}>
               {options &&
                  options.map(({ _id, value: optValue, displayList }) => (
                     <option key={_id} value={optValue}>
                        {displayList}
                     </option>
                  ))}
            </Select>
            <Button active={isOpen}>
               {label}:&nbsp;{value && value}
               {sort && (
                  <IconWrapper onClick={() => this.toggleSortDirection()}>
                     <StyledIcon direction={sortDirection} />
                  </IconWrapper>
               )}
            </Button>
            {isOpen && (
               <DropdownList>
                  {options.map(({ _id, value: optValue, displayList }) => (
                     <Option
                        key={_id}
                        value={optValue}
                        selected={optValue === value}
                        onClick={(e) => this.handleClickOption(e, optValue)}
                     >
                        {displayList}
                     </Option>
                  ))}
               </DropdownList>
            )}
         </Wrapper>
      )
   }
}

Dropdown.propTypes = {
   options: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         value: PropTypes.string,
         display: PropTypes.string,
         displayList: PropTypes,
      }),
   ),
   label: PropTypes.string.isRequired,
   sort: PropTypes.bool,
   defaultvalue: PropTypes.string.isRequired,
}

Dropdown.defaultProps = {
   options: null,
   sort: false,
}

export default Dropdown
