import * as React from 'react'
import { Extendable } from 'types/utils'

export interface ComponentPropExtraProps {
  children?: JSX.Element[]
  title?: React.ReactNode
  inline?: boolean
}

const descriptionStyle = {
  color: '#666',
}
const contentStyle = {
  marginLeft: '0.5em',
}
const contentBlockStyle = {
  ...contentStyle,
  display: 'block',
}
const contentInlineStyle = {
  ...contentStyle,
  display: 'inline',
}

const ComponentPropExtra = ({
  children,
  inline,
  title,
  ...rest
}: Extendable<ComponentPropExtraProps>) => (
  <div {...rest} style={descriptionStyle}>
    <strong>{title}</strong>
    <div style={inline ? contentInlineStyle : contentBlockStyle}>{children}</div>
  </div>
)

export default ComponentPropExtra
