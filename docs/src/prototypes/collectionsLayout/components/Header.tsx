import * as React from 'react'
import { Provider, Icon, Layout } from '@stardust-ui/react'
import HeaderTwo from './HeaderTwo'

export default props => {
  return (
    <Provider.Consumer
      render={({ siteVariables }) => {
        return (
          <div
            style={{ borderBottom: '1px solid lightgray', height: '50px', padding: ' 3px 15px' }}
          >
            <Layout
              start={<Icon name="bookmark" bordered styles={{ color: siteVariables.brand }} />}
              main={<HeaderTwo />}
              end={<Icon name="bars" styles={{ color: siteVariables.brand }} />}
            />
          </div>
        )
      }}
    />
  )
}
