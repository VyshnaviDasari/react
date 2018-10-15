import React, { Component } from 'react'
import { Menu, Button } from '@stardust-ui/react'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

class Navigation extends Component {
  render() {
    return (
      <div>
        <Menu items={items} pills type="primary" vertical />
        <Button
          type="secondary"
          icon="add"
          content="Add Collection"
          iconPosition="before"
          styles={{ backgroundColor: 'snow' }}
        />
      </div>
    )
  }
}

export default Navigation
