import GetAppIcon from '@material-ui/icons/GetApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import { iconFigma } from 'assets'
import Icon from 'components/atoms/Icon/Icon'
import Button from 'components/molecules/Button/Button'
import PropTypes from 'prop-types'
import React from 'react'

const FigmaIcon = () => <Icon src={iconFigma} small />

export default {
   component: Button,
   title: 'Molecules/Button',
   argTypes: {
      children: {
         control: 'text',
      },
      icon: {
         control: {
            type: 'select',
            options: {
               none: null,
               App: 'app',
               Demo: 'demo',
               GitHub: 'github',
               Download: 'download',
               Figma: 'figma',
            },
         },
      },
   },
}

const getIconComponent = (iconName) => {
   switch (iconName) {
      case 'app':
         return WebAssetIcon
      case 'demo':
         return LinkIcon
      case 'github':
         return GitHubIcon
      case 'download':
         return GetAppIcon
      case 'figma':
         return FigmaIcon
      default:
         return null
   }
}

export const Basic = ({ children, icon: iconName }) => {
   const icon = getIconComponent(iconName)

   return <Button icon={icon}>{children}</Button>
}

Basic.propTypes = {
   children: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
}

Basic.args = {
   children: 'Strona główna',
   icon: null,
}
