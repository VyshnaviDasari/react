import * as React from 'react'
import { Provider, Menu, Layout, Icon, Button } from '@stardust-ui/react'

const items = [
  { key: 'home', icon: 'home' },
  { key: 'users', icon: 'users' },
  { key: 'search', icon: 'search' },
]

export default props => {
  return (
    <Provider.Consumer
      render={({ siteVariables }) => {
        return (
          <div
            style={{
              borderBottom: '1px solid lightgray',
              backgroundColor: 'snow',
              height: '40px',
              padding: ' 3px 15px',
            }}
          >
            <Layout
              start={<Icon name="bars" styles={{ color: siteVariables.brand }} />}
              main={
                <Button
                  type="secondary"
                  icon="add"
                  content="New Link"
                  iconPosition="before"
                  styles={{ backgroundColor: 'snow', borderColor: 'white' }}
                />
              }
              end={<Menu iconOnly defaultActiveIndex={0} items={items} type="primary" />}
            />
          </div>
        )
      }}
    />
  )
}
