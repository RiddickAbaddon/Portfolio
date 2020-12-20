import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
   position: fixed;
   z-index: 9;
   top: 0;
   left: 0;
   width: 100%;
   font-size: ${({ theme }) => theme.fontSize.s};
   padding: 10px;
   color: ${({ theme }) => theme.fontPrimary};
   text-align: center;
   background: ${({ theme }) => theme.errorColor};
`

const Icon = styled(SignalWifiOffIcon)`
   position: relative;
   top: 2px;
`

const OfflineInfo = ({ language }) => (
   <Wrapper>
      {language === 'en' ? 'Page is in offline mode' : 'Strona jest w trybie offline'}&nbsp;
      <Icon />
   </Wrapper>
)

OfflineInfo.propTypes = {
   language: PropTypes.string.isRequired,
}

const mapStateToProps = ({ app: { language } }) => ({ language })

export default connect(mapStateToProps)(OfflineInfo)
