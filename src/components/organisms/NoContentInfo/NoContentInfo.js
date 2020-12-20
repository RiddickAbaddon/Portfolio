import Divider from 'components/atoms/Divider/Divider'
import Button from 'components/molecules/Button/Button'
import NoContent from 'components/molecules/NoContent/NoContent'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledButton = styled(Button)`
   ::before {
      background: ${({ theme }) => theme.bgPrimary};
   }
`

const handleButtonClick = () => {
   window.location.reload()
}

const NoContentInfo = ({ language }) => (
   <NoContent>
      <>
         {language === 'en' ? 'Failed to load content' : 'Nie udało się wczytać zawartości'}
         <Divider size="small" />
         <StyledButton onClick={() => handleButtonClick()}>
            {language === 'en' ? 'Reload page' : 'Odśwież stronę'}
         </StyledButton>
      </>
   </NoContent>
)

NoContentInfo.propTypes = {
   language: PropTypes.string.isRequired,
}

const mapStateToProps = ({ app: { language } }) => ({ language })

export default connect(mapStateToProps)(NoContentInfo)
