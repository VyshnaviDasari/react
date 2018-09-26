import {
  FontIconSpec,
  IThemeInput,
  SvgIconSpec,
  ThemeIcons,
  ThemeIconSpec,
} from '../../../types/theme'

import * as siteVariables from './siteVariables'
import * as componentVariables from './componentVariables'
import * as componentStyles from './componentStyles'

import { default as svgIconsAndStyles } from './components/Icon/svg'
import { default as fontIcons } from './components/Icon/font'

import { SvgIconSpecWithStyles, TeamsSvgIconSpec } from './components/Icon/svg/types'

const declareSvg = (svgIcon: SvgIconSpec): ThemeIconSpec => ({
  isSvg: true,
  icon: svgIcon,
})

const declareFontBased = (fontIcon: FontIconSpec): ThemeIconSpec => ({ icon: fontIcon })

const icons: ThemeIcons = Object.keys(svgIconsAndStyles as {
  [iconName: string]: TeamsSvgIconSpec
}).reduce<ThemeIcons>((accIcons, iconName) => {
  const iconAndMaybeStyles = svgIconsAndStyles[iconName]

  const icon: SvgIconSpec = (iconAndMaybeStyles as any).styles
    ? (iconAndMaybeStyles as SvgIconSpecWithStyles).icon
    : (iconAndMaybeStyles as SvgIconSpec)

  return { ...accIcons, ...{ [iconName]: declareSvg(icon) } }
}, {})

Object.keys(fontIcons).forEach(iconName => {
  icons[iconName] = declareFontBased(fontIcons[iconName])
})

export default {
  siteVariables,
  componentVariables,
  componentStyles,
  icons,
} as IThemeInput
