import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <path
        className={classes.outlinePart}
        d="M23.143 11.429H8.857a.857.857 0 0 0-.857.857v7.429a.857.857 0 0 0 .857.857h14.286a.857.857 0 0 0 .857-.858v-7.428a.857.857 0 0 0-.857-.857zm-3.857 8.584H8.812a.25.25 0 0 1-.25-.25v-7.5a.25.25 0 0 1 .25-.25h10.474zM23.167 20h-3.31v-8h3.31a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25z"
      />
      <g className={classes.filledPart}>
        <path d="M23.143 11.429H8.857a.857.857 0 0 0-.857.857v7.429a.857.857 0 0 0 .857.857h14.286a.857.857 0 0 0 .857-.858v-7.428a.857.857 0 0 0-.857-.857zm.286 8.286a.286.286 0 0 1-.286.286H8.857a.286.286 0 0 1-.286-.286v-7.429A.286.286 0 0 1 8.857 12h14.286a.286.286 0 0 1 .286.286z" />
        <path d="M19.857 12.571h3v6.857h-3zm-10.714 0h10.143v6.857H9.143z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
