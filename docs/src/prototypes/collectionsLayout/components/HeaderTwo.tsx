import * as React from 'react'
import { Text, Menu, Provider, Layout } from '@stardust-ui/react'

const items = [
  { key: 'personal', content: 'Personal' },
  { key: 'explore', content: 'Explore' },
  { key: 'all', content: 'All' },
]

export default props => {
  return (
    <Provider.Consumer
      render={() => {
        return (
          <div>
            <Layout
              start={<Text weight="semibold" size="large" content="Collections" />}
              main={<Menu items={items} pills type="primary" />}
            />
          </div>
        )
      }}
    />
  )
}
