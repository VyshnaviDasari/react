import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={classes.outlinePart}
          d="M20.25 16h-8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.5c.28 0 .5.22.5.5s-.22.5-.5.5z"
        />
        <path
          className={classes.filledPart}
          d="M20.25 16.5h-8.5c-.55 0-1-.45-1-1s.45-1 1-1h8.5c.55 0 1 .45 1 1s-.45 1-1 1z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
